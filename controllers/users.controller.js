const users = require('../models/users');

module.exports = {
  create: (req, res) => {
    users.create(req.body, (result, error) => {
      res.status(201).json(result);
    });
  },

  getAll: (req, res) => {
    users.find((result) => {
      res.status(200).json(result);
    });
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
