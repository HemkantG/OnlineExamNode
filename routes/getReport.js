const express = require('express');
const router = express.Router();
const getReport = require('../SPCalls/GetReport/getReport')
const admin = require('../middleware/admin');

router.post('/', async (req, res) => {
    const result = await getReport(req.body);
    res.status(200).send(result.recordset);
});

module.exports = router;
