const express = require('express');
const _19110049Router = require('./19110049.route');
const router = express.Router();

const homeRouter = require('./home.route');
const messageRouter = require('./message.route');

router.use('/', homeRouter);
router.use('/19110049', _19110049Router);
router.use('/message', messageRouter);

module.exports = router;
