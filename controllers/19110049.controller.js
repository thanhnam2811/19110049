const { mygroup, myTeam } = require('../models/mygroup');

const _19110049Controller = {
    post: (req, res) => {
        try {
            const { item } = req.body;

            const isExist = mygroup.find((st) => st.id === item);
            if (isExist) throw new Error('Đã có trong mygroup!');

            const mem = myTeam.find((st) => st.id === item);
            if (!mem)
                throw new Error(
                    'Không phải thành viên trong nhóm đề tài cuối kỳ!'
                );
            else {
                mygroup.push(mem);
                res.json(mygroup);
            }
        } catch (e) {
            res.send('Not valid');
        }
    },
    get: (req, res) => {
        const id = req.params.id;

        const mem = mygroup.find((st) => st.id === Number(id));

        if (mem) res.json(mem);
        else res.json({ error: 'not valid' });
    },
};

module.exports = {
    _19110049Controller,
};
