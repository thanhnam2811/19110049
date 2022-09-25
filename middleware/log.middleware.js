const moment = require('moment');

const logMiddleware = (req, res, next) => {
    console.log(
        `${moment().format('DD/MM/YY - HH:mm:ss')}:`,
        `\tmethod: ${req.method}`,
        `\tURL: ${req.url}`
    );
    next();
};

module.exports = logMiddleware;
