const coursesService = require('../services/courses.service');

module.exports = {
  create: async (req, res) => {
    const response = await coursesService.create(req.body);
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      res.status(201).json(response.result);
    }
  },

  getAll: async (req, res) => {
    const response = await coursesService.find();
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      console.log(response.result);
      res.status(200).json(response.result);
    }
  },

  getOne: async (req, res) => {
    const response = await coursesService.findOne(+req.params.id);
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
    const response = await coursesService.update(id, body);
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      console.log(response.result);
      res.status(200).json(response.result);
    }
  },

  delete: async (req, res) => {
    const id = +req.params.id;
    const response = await coursesService.delete(id);
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      console.log(response.result);
      res.status(200).json(response.result);
    }
  },
};
