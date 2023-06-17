module.exports = (app) => {
  const router = require('express').Router();
  const controller = require('../controllers/users.controller');

  router.post('/', controller.create);

  router.get('/', controller.getAll);

  router.get('/:id', controller.getOne);

  router.put('/:id', controller.update);

  router.delete('/:id', controller.delete);

  app.use('/users', router);
};
