const express = require('express');
const router = express.Router();
const requestRetest = require('../SPCalls/Retest/retest')
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
    let results = await requestRetest(req.user.userId, 'Requested')
    res.status(200).send(results.recordset);
});

module.exports = router;
