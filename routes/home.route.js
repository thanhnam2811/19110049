const express = require('express');
const homeRouter = express.Router();

const { HomeController } = require('../controllers/home.controller');

homeRouter.get('/', HomeController.get);

module.exports = homeRouter;
