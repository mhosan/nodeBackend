const express = require('express');

const response = require('../../../network/response');
const router = express.Router();
router.get('/', (req, res) => {
    //res.send('Todo funca ok');
    response.success(req, res, 'Todo funca ok', 200);
});

module.exports = router;