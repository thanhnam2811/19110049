const { mygroup, myTeam } = require('../models/mygroup');

const MessageController = {
    get: (req, res) => {
        const id = req.params.id;

        const mem = mygroup.find((st) => st.id === Number(id));

        if (mem)
            res.send(`<html><body><ul><li>${mem.name}</li></ul></body></html>`);
        else res.send('Not valid');
    },
    getAll: (req, res) => {
        res.send(
            `<html><body><ul>${mygroup
                .map((mem) => `<li>${mem.name}</li>`)
                .join('')}</ul></body></html>`
        );
    },
};

module.exports = {
    MessageController,
};
