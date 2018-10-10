const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const user = jwt.verify(token, config.get('jwtPrivateKey'));
        if (!user.isAdmin) {
            res.status(403).send('Forbidden. Token is not valid');
            return;
        }
        next();
    }
    catch (ex) {
        res.status(400).send('Invalid token.');
    }
}