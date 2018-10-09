const express = require('express');
const router = express.Router();
const requestRetest = require('../SPCalls/Retest/retest')
const auth = require('../middleware/auth');

router.post('/', async (req, res) => {
    let results = await requestRetest(req.body.UserId, 'Granted')
    res.status(200).send(results.recordset);
});

module.exports = router;
