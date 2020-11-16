const express = require('express')
const router = express.Router()

const {
  createExp,
  getAllExpById,
  getExpById,
  updateExp,
  deleteExp
} = require('../controllers/ExperienceController')

router.post('/', createExp)
router.get('/:exId', getAllExpById)
router.get('/detail/:exId', getExpById)
router.put('/:exId', updateExp)
router.delete('/:exId', deleteExp)

module.exports = router
