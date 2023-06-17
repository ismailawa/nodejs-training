const users = require('../models/users');

module.exports = {
  create: (req, res) => {
    res.status(201).json(users.create(req.body));
  },

  getAll: (req, res) => {
    res.status(200).json(users.find());
  },

  getOne: (req, res) => {
    const result = users.findOne(+req.params.id);
    res.status(200).json(result);
  },

  update: (req, res) => {
    const id = +req.params.id;
    const body = req.body;
    res.status(200).json(users.update(id, body));
  },

  delete: (req, res) => {
    const id = +req.params.id;
    res.status(200).json(users.delete(id));
  },
};
