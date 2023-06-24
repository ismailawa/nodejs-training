const users = require('../models/users');

module.exports = {
  create: async (req, res) => {
    const response = await users.create(req.body);
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      res.status(201).json(response.result);
    }
  },

  getAll: async (req, res) => {
    console.log('i was in the controller');
    const response = await users.find();

    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      console.log(response.result);
      res.status(200).json(response.result);
    }
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
