const express = require('express');
const _19110049Router = express.Router();

const { _19110049Controller } = require('../controllers/19110049.controller');

_19110049Router.get('/:id', _19110049Controller.get);
_19110049Router.post('/', _19110049Controller.post);

module.exports = _19110049Router;
