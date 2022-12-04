const express = require("express");
const routes = express.Router();

const UserController = require('./controllers/UserController')
const ProjectController = require('./controllers/UserController')

routes
  // users
  .get('/users', UserController.index)
  .post('/users', UserController.create)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)
  // projects
  .get('/projects', ProjectController.index)

  
module.exports = routes;