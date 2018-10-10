const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = (userName, userId, isAdmin = false) => {
    const token = jwt.sign({ userId: userId, userName: userName, isAdmin: isAdmin }, config.get('jwtPrivateKey'));
    return token;
}