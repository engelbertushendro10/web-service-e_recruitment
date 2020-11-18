const express = require('express')
const router = express.Router()

const {
  getAllCompany,
  getCompanyById,
  updateCompany
} = require('../controllers/CompanyController')
// const { route } = require('./engineer')

router.get('/', getAllCompany)
router.get('/:compId', getCompanyById)
router.get('/detail/:compId', getCompanyById)
router.put('/:compId', updateCompany)

module.exports = router
