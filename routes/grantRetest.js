const express = require('express');
const router = express.Router();
const requestRetest = require('../SPCalls/Retest/retest')
const admin = require('../middleware/admin');

router.post('/',admin, async (req, res) => {
    let results = await requestRetest(req.body.UserId, 'Granted')
    res.status(200).send(results.recordset);
});

module.exports = router;
