const express = require('express')
const router = express.Router()

const {
    createAccount,
    updateAccount,
    loginAccount
} = require('../controllers/AccountController')

router.post('/', createAccount)
router.put('/:accountId', updateAccount)
    //login
router.post('/login', loginAccount)

module.exports = router