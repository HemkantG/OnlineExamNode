const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upadateAnswer = require('../SPCalls/UpdateAnswer/updateAnswer')

router.post('/', auth, async (req, res) => {
    const userScore = req.body;
    let finalResult = (await upadateAnswer({ UserId: 1, QueID: 1, AnsID: 3, AnswerGiven: 4, SessionID: 5, TestID: 6, Submitted: 7 })).recordset[0]
    res.status(200).send(finalResult);
});

module.exports = router;
