const usersService = require('../services/users.service');

module.exports = {
  create: async (req, res) => {
    const response = await usersService.create(req.body);
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      res.status(201).json(response.result);
    }
  },

  login: async (req, res) => {
    const response = await usersService.login(req.body);
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      res.status(201).json(response.result);
    }
  },

  getAll: async (req, res) => {
    console.log('inside controller', req.user);
    const response = await usersService.find();
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      res.status(200).json(response.result);
    }
  },

  getOne: async (req, res) => {
    const response = await usersService.findOne(+req.params.id);
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      console.log(response.result);
      res.status(200).json(response.result);
    }
  },

  update: async (req, res) => {
    const id = +req.params.id;
    const body = req.body;
    const response = await usersService.update(id, body);
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      console.log(response.result);
      res.status(200).json(response.result);
    }
  },

  delete: async (req, res) => {
    const id = +req.params.id;
    const response = await usersService.delete(id);
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      console.log(response.result);
      res.status(200).json(response.result);
    }
  },
};
