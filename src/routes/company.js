const express = require('express')
const router = express.Router()

const {
  getAllCompany,
  getCompanyById,
  updateCompany
} = require('../controllers/CompanyController')

router.get('/', getAllCompany)
router.get('/detail/:cnId', getCompanyById)
router.put('/:cnId', updateCompany)

module.exports = router
