const jwt = require('jsonwebtoken');
const { secret } = require('../config/default');

module.exports = (data, expiresIn = 300) => {
    return jwt.sign(
        data,
        secret,
        { expiresIn }
    );
}