const users = require('../models/users');

module.exports = {
  create: (req, res) => {
    users.create(req.body, (error, result) => {
      if (error) {
        return res.status(400).json(error.message);
      }
      res.status(201).json(result);
    });
  },

  getAll: (req, res) => {
    users.find((error, result) => {
      if (error) {
        return res.status(400).json(error.message);
      }
      res.status(200).json(result);
    });
  },

  getOne: (req, res) => {
    users.findOne(+req.params.id, (error, result) => {
      if (error) {
        return res.status(400).json(error.message);
      }
      res.status(200).json(result);
    });
  },

  update: (req, res) => {
    const id = +req.params.id;
    const body = req.body;
    users.update(id, body, (error, result) => {
      if (error) {
        return res.status(400).json(error.message);
      }
      res.status(200).json(result);
    });
  },

  delete: (req, res) => {
    const id = +req.params.id;
    users.delete(id, (error, result) => {
      if (error) {
        return res.status(400).json(error.message);
      }
      res.status(200).json(result);
    });
  },
};
