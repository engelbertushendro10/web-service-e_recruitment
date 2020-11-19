const express = require('express')
const router = express.Router()

const {
  getAllEngineer,
  getEngineerById,
  getFilterEngineer,
  updateEngineer
} = require('../controllers/EngineerController')

router.get('/', getAllEngineer)
router.get('/detail/:eId', getEngineerById)
router.get('/filter', getFilterEngineer)
router.put('/:eId', updateEngineer)

module.exports = router

