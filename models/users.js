let data = [
  {
    id: 1,
    name: 'idi mohammed',
    email: 'idi@gmail.com',
    phone: '123-456-565',
    address: 'katako laranto',
  },
  {
    id: 2,
    name: 'mohd mohammed',
    email: 'mohd@gmail.com',
    phone: '023-456-865',
    address: 'bauchi road',
  },
];

const conn = require('../helpers/connection');

module.exports = {
  create: (body, callback) => {
    const values = Object.values(body);
    conn.query(
      'INSERT INTO users(name,email,phone,address) VALUES (?,?,?,?)',
      values,
      (err, result) => {
        if (err) {
          callback(null, err);
        } else {
          callback(result);
        }
      }
    );
  },
  find: (callback) => {
    let users;
    conn.query('SELECT * FROM users', (err, res) => {
      if (err) {
        callback(null, err);
      } else {
        callback(res);
      }
    });
  },
  findOne: (id) => data.filter((user) => user.id === id)[0],
  update: (id, body) => {
    const user = data.filter((user) => user.id === id)[0];
    const indexOfUser = data.indexOf(user);
    const newUser = { ...user, ...body };
    data[indexOfUser] = newUser;
    return newUser;
  },

  delete: (id) => {
    data = data.filter((user) => user.id !== id);
    return {
      delete: true,
    };
  },
};
