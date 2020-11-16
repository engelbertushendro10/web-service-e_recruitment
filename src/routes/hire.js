const express = require('express')
const router = express.Router()

const {
  createHire,
  getAllHireByEngineer,
  getAllHireByProject,
  updateHireStatus
} = require('../controllers/HireController')

router.post('/', createHire)
router.get('/engineer/:enId', getAllHireByEngineer)
router.get('/project/:pjId', getAllHireByProject)
router.put('/:hrId', updateHireStatus)

module.exports = router
