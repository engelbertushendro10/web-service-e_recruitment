const express = require('express')
const router = express.Router()
const { authorization } = require('../midleware/auth')

const {
    getAllCompany,
    getCompanyById,
    updateCompany
} = require('../controllers/CompanyController')
    // const { route } = require('./engineer')

router.get('/', authorization, getAllCompany)
router.get('/:compId', authorization, getCompanyById)
router.get('/detail/:compId', authorization, getCompanyById)
router.put('/:compId', authorization, updateCompany)

module.exports = router