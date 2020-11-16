const express = require('express')
const router = express.Router()

const {
  createAccount,
  updateAccount
} = require('../controllers/AccountController')

router.post('/', createAccount)
router.put('/:acId', updateAccount)

module.exports = router
