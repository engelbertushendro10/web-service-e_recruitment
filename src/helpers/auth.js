require('dotenv')
const jwt = require('jsonwebtoken')

module.exports = {
    authorization: (req, res, next) => {
        const token = req.header.authorization
        console.log(token);
    }
}