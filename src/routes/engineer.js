const express = require('express')
const router = express.Router()
const { authorization } = require('../midleware/auth')

const {
    getAllEngineer,
    getEngineerById,
    getFilterEngineer,
    updateEngineer
} = require('../controllers/EngineerController')

router.get('/', authorization, getAllEngineer)
router.get('/detail/:eId', authorization, getEngineerById)
router.get('/filter', authorization, getFilterEngineer)
router.put('/:eId', authorization, updateEngineer)

module.exports = router