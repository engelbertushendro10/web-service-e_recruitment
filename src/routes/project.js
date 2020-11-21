const express = require('express')
const router = express.Router()
    //const { authorization } = require('../helpers/auth')

const {
    createProject,
    getAllProjectById,
    getProjectById,
    updateProject,
    deleteProject
} = require('../controllers/ProjectController')
    //const { authorization } = require('../helpers/auth')

router.post('/', createProject)
router.get('/:cId', getAllProjectById)
router.get('/detail/:pId', getProjectById)
router.put('/:pId', updateProject)
router.delete('/:pId', deleteProject)

module.exports = router