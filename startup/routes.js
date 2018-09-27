const express = require('express');
const cors = require('cors');
const users = require('../routes/users');
const questions = require('../routes/questions');
const colleges = require('../routes/colleges');
const streams = require('../routes/streams');
const states = require('../routes/states');
const calculate = require('../routes/calculate');
const results = require('../routes/results');

module.exports = function (app) {
    app.use(cors());
    app.use(express.json());
    app.get('/', (req, res) => {
        res.send('Hello from Online examination system');
    })

    app.use('/api/users', users);
    app.use('/api/questions', questions);
    app.use('/api/colleges', colleges);
    app.use('/api/streames', streams);
    app.use('/api/states', states);
    app.use('/api/calculate', calculate);
    app.use('/api/results', results);

}
