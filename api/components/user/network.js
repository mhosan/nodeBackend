const express = require('express');

const response = require('../../../network/response');
const Controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Todo funca ok');
    const lista = Controller.list();
    response.success(req, res, lista, 200);
});

module.exports = router;