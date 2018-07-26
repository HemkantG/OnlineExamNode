const express = require('express');
const cors = require('cors');
const metadata = require('../routes/metadata');
const dashboard = require('../routes/dashboard');

module.exports = function (app) {
    app.use(cors());
    app.use(express.json());
    app.get('/',(req, res)=>{
        res.send('Hello from Sentiment Analysis')
    })
    app.use('/api/metadata', metadata);
    app.use('/api/dashboard', dashboard);
}
