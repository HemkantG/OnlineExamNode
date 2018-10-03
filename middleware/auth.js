const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const user = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = user;
        console.log('In auth '+req.header('admin-secret'))
        const password = req.header('admin-secret');
        req.user.adminPassword = password;
        next();
    }
    catch (ex) {
        res.status(400).send('Invalid token.');
    }
}