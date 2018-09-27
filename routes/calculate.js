const express = require('express');
const router = express.Router();

const questions = require('../data/sample.json')
const transFormedDS = [];

router.get('/', async (req, res) => {
    questions.Questions.forEach(element => {
        let options = questions.Options.filter(a =>
            element.QuestionID === a.QueID
        )
        let type = questions.Options.find(a => element.QuestionID === a.QueID).AnswerType;
        transFormedDS.push({
            Section: element.SectionName === "Section-1" ? 1 : 2,
            Question: element.QuestionDescription,
            Type: type,
            Options: options
        })
    });
    
    res.send(transFormedDS);
});

module.exports = router;
