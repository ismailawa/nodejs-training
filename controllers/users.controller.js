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

  getAll: async (req, res) => {
    const response = await usersService.find();
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      console.log(response.result);
      res.status(200).json(response.result);
    }
  },
};
