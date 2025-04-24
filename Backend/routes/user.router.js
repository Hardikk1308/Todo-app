const routes = require('express').Router();
const userController = require('../Controller/user.controllers');

routes.post('/register', userController.register);
routes.post('/login', userController.login);

  module.exports = routes;