const express = require('express');
const routes = express.Router();
const index = require('../controllers/index');
const crud = require('../controllers/crud');
const login = require('../controllers/login');
const jwt = require('../middlewares/jwt');

routes.get('/', index.index);

routes.post('/login', login.login);

routes.get('/api', jwt.jwtAuth, crud.readAll);

module.exports = routes;
