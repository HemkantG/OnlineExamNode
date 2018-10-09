const jwt = require('jsonwebtoken');
const config = require('config');
const retakeExam = require('../SPCalls/RetakeExam/RetakeExam')

module.exports = async function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const result = await retakeExam(req.user.userName, req.user.adminPassword);
        if(!(result.recordset && result.recordset.length===1))
        return res.status(403).send('Un-Authorized');
        next();
    }
    catch (ex) {
        res.status(400).send('Invalid token.');
    }
}