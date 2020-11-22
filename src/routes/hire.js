const express = require('express')
const router = express.Router()
const { authorization } = require('../midleware/auth')


const {
    createHire,
    getAllHireByEngineer,
    getAllHireByProject,
    updateHireStatus
} = require('../controllers/HireController')

router.post('/', authorization, createHire)
router.get('/enginer/:eId', authorization, getAllHireByEngineer)
router.get('/project/:pId', authorization, getAllHireByProject)
router.put('/:hrId', authorization, updateHireStatus)

module.exports = router