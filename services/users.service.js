const { User } = require('../models');
module.exports = {
  create: async (body) => {
    try {
      const user = await User.create(body);
      return { result: user };
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
      const user = await User.findOne({ where: { id: id } });
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
