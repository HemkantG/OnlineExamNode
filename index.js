require('express-async-errors');
const express = require('express');
const app = express();
const winston = require('winston');
const path = require('path');

winston.add(winston.transports.File, { filename: 'logfile.log' });
const port = process.env.PORT || 5000;



//app.use("/", express.static(public));
app.use(require('morgan')('tiny'));
require('./startup/unhandled')();
require('./startup/routes')(app);
require('./startup/logging')(app);
require('./startup/prod')(app);

app.use(express.static(__dirname + '/public'));
app.get('*', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});


app.listen(port, function () {
    winston.info(`Server started at port ${port}.`);
});

