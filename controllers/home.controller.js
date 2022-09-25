const { mygroup } = require('../models/mygroup');

const HomeController = {
    get: (req, res) => {
        res.json(mygroup);
    },
};

module.exports = {
    HomeController,
};
