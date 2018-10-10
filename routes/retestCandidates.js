const express = require('express');
const router = express.Router();
const getRetestCandidates = require('../SPCalls/RetestCandidates/retestCandidates')
const admin = require('../middleware/admin');

router.get('/', admin, async (req, res) => {
    const candidates = (await getRetestCandidates()).recordset;
    res.status(200).send(candidates);
});

module.exports = router;
