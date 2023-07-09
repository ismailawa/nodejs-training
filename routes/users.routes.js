const passport = require('passport');

module.exports = (app) => {
  const router = require('express').Router();
  const controller = require('../controllers/users.controller');

  router.post('/', controller.create);

  router.post('/login', controller.login);

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    controller.getAll
  );

  router.get(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    controller.getOne
  );

  router.put(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    controller.update
  );

  router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    controller.delete
  );

  app.use('/api/users', router);
};
