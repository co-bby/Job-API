const { Router } = require('express');

const { login, register } = require('../controllers/auth');

Router.post('/register', register);
Router.post('/login', login);

module.exports = Router;
