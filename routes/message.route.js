const express = require('express');
const messageRouter = express.Router();

const { MessageController } = require('../controllers/message.controller');

messageRouter.get('/', MessageController.getAll);
messageRouter.get('/:id', MessageController.get);

module.exports = messageRouter;
