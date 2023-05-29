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

module.exports = {
  create: (body) => {
    const user = { id: data.length + 1, ...body };
    data.push(user);
    return user;
  },
  find: () => data,
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
