const express = require('express');
const router = express.Router();
const { poolPromise } = require('../database/db')
const auth = require('../middleware/auth');
const submitResult = require('../SPCalls/SubmitResult/submitResult')

router.post('/', auth, async (req, res) => {
    const userScore = req.body;
    let finalResult = (await submitResult(req.user, userScore)).recordset[0]
    res.status(200).send(finalResult);
});

module.exports = router;
