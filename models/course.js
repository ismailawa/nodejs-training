const conn = require("../helpers/connection");
module.exports = {
  create: (body, callback) => {
    const values = Object.values(body);
    conn.query(
      "INSERT INTO courses(title,code,credit_unit) VALUES (?,?,?)",
      values,
      (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, result);
        }
      }
    );
  },
  find: (callback) => {
    conn.query("SELECT * FROM courses", (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    });
  },

  findOne: (id, callback) => {
    conn.query("SELECT * FROM courses WHERE id = ?", id, (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    });
  },

  update: (id, body, callback) => {
    conn.query("UPDATE courses SET ? WHERE id = ?", [body, id], (error, res) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, res);
      }
    });
  },

  delete: (id, callback) => {
    conn.query("DELETE FROM courses WHERE id = ?", id, (error, res) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, res);
      }
    });
  },
};
