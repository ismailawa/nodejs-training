const conn = require('../helpers/connection');

module.exports = {
  create: async (body) => {
    try {
      const db = await conn();
      const values = Object.values(body);
      const result = await db.query(
        'INSERT INTO users(name,email,phone,address) VALUES (?,?,?,?)',
        values
      );
      return { result };
    } catch (error) {
      return { error };
    }
  },

  find: async () => {
    try {
      const db = await conn();
      const [rows, fields] = await db.query('SELECT * FROM users');

      return { result: rows };
    } catch (error) {
      return { error };
    }
  },

  findOne: (id, callback) => {
    conn.query('SELECT * FROM users WHERE id = ?', id, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    });
  },

  update: (id, body, callback) => {
    conn.query('UPDATE users SET ? WHERE id = ?', [body, id], (error, res) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, res);
      }
    });
  },

  delete: (id, callback) => {
    conn.query('DELETE FROM users WHERE id = ?', id, (error, res) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, res);
      }
    });
  },
};
