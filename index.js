const express = require('express');
const logMiddleware = require('./middleware/log.middleware');
const router = require('./routes');
const PORT = 5000;

const app = express();
app.use(express.json());

app.use('/', logMiddleware, router);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
