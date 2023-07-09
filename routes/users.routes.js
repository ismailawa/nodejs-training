const auth = require('../middleware/auth');
module.exports = (app) => {
  const router = require('express').Router();
  const controller = require('../controllers/users.controller');

  router.post('/', controller.create);

  router.post('/login', controller.login);

  router.get('/', auth, controller.getAll);

  router.get('/:id', auth, controller.getOne);

  router.put('/:id', auth, controller.update);

  router.delete('/:id', auth, controller.delete);

  app.use('/api/users', router);
};
