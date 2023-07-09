const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  create: async (body) => {
    try {
      const { password, ...rest } = body;
      const salt = bcrypt.genSaltSync(12);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const user = await User.create({
        ...rest,
        password: hashedPassword,
      });
      return { result: user };
    } catch (error) {
      return { error };
    }
  },

  login: async (body) => {
    try {
      const { password, email } = body;

      //Find user in database
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return { error: { message: 'Wrong credentials' } };
      }

      //Check user password
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return { error: { message: 'Wrong credentials' } };
      }

      //generate jwt token
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 10,
          data: {
            id: user.id,
            email: user.email,
          },
        },
        process.env.JWT_SECRET
      );

      return { result: { user, token } };
    } catch (error) {
      return { error };
    }
  },

  find: async () => {
    try {
      const users = await User.findAll();
      return { result: users };
    } catch (error) {
      return { error };
    }
  },

  findOne: async (id) => {
    try {
      const user = await User.findOne({ where: { id: id }, raw: true });
      return { result: user };
    } catch (error) {
      return { error };
    }
  },

  update: async (id, body) => {
    try {
      const user = await User.update(body, { where: { id: id } });
      return { result: user };
    } catch (error) {
      return { error };
    }
  },

  delete: async (id) => {
    try {
      const user = await User.destroy({ where: { id: id } });
      return { result: user };
    } catch (error) {
      return { error };
    }
  },
};
