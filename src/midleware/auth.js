require('dotenv')
const jwt = require('jsonwebtoken')

module.exports = {
    authorization: (request, response, next) => {
        let token = request.headers.authorization
        if (token) {
            token = token.split(' ')[1]
            jwt.verify(token, process.env.JWT_KEY, (error, result) => {
                if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
                    response.status(403).send({
                        success: false,
                        message: error.message
                    })
                } else {
                    if (result.type === 'enginer') {
                        next()
                    } else {
                        response.status(403).send({
                            success: false,
                            message: 'You cant access!'
                        })
                    }
                }
            })
        } else {
            response.status(400).send({
                success: false,
                message: 'Please login first!'
            })
        }
    }
}