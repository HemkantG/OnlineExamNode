const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = (userId, userName) => {
    const token = jwt.sign({ userId: userId, userName: userName }, config.get('jwtPrivateKey'));
    return token;
}