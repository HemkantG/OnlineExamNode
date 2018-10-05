const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upadateAnswer = require('../SPCalls/UpdateAnswer/updateAnswer')

router.post('/', auth, async (req, res) => {
    const answerData = req.body.AnswerData;
    let finalResult = (await upadateAnswer(answerData)).recordset[0]
    res.status(200).send(finalResult);
});

module.exports = router;
