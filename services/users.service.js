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

  //   findOne: (id, callback) => {
  //     conn.query('SELECT * FROM users WHERE id = ?', id, (err, res) => {
  //       if (err) {
  //         callback(err, null);
  //       } else {
  //         callback(null, res);
  //       }
  //     });
  //   },

  //   update: (id, body, callback) => {
  //     conn.query('UPDATE users SET ? WHERE id = ?', [body, id], (error, res) => {
  //       if (error) {
  //         callback(error, null);
  //       } else {
  //         callback(null, res);
  //       }
  //     });
  //   },

  //   delete: (id, callback) => {
  //     conn.query('DELETE FROM users WHERE id = ?', id, (error, res) => {
  //       if (error) {
  //         callback(error, null);
  //       } else {
  //         callback(null, res);
  //       }
  //     });
  //   },
};
