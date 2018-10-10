const express = require('express');
const cors = require('cors');
const users = require('../routes/users');
const questions = require('../routes/questions');
const colleges = require('../routes/colleges');
const streams = require('../routes/streams');
const states = require('../routes/states');
const calculate = require('../routes/calculate');
const results = require('../routes/results');
const updateAnswer = require('../routes/updateAnswer');
const requestRetest = require('../routes/requestRetest');
const grantRetest = require('../routes/grantRetest');
const retestCandidates = require('../routes/retestCandidates');
const adminLogin = require('../routes/adminLogin');
const getReport = require('../routes/getReport');

module.exports = function (app) {
    app.use(cors({ exposedHeaders: 'x-auth-token' }));
    app.use(express.json());
    app.use('/api/colleges', colleges);
    app.use('/api/streams', streams);
    app.use('/api/states', states);
    app.use('/api/users', users);
    app.use('/api/calculate', calculate);
    app.use('/api/results', results);
    app.use('/api/questions', questions);
    app.use('/api/updateAnswer', updateAnswer);
    app.use('/api/requestRetest', requestRetest);
    app.use('/api/grantRetest', grantRetest);
    app.use('/api/retestCandidates', retestCandidates);
    app.use('/api/adminLogin', adminLogin);
    app.use('/api/getReport', getReport);
}
