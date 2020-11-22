const express = require('express')
const router = express.Router()
const { authorization } = require('../midleware/auth')
const uploadImage = require('../midleware/multer')

const {
    createProject,
    getAllProjectById,
    getProjectById,
    updateProject,
    deleteProject
} = require('../controllers/ProjectController')
    //const { authorization } = require('../helpers/auth')

router.post('/', authorization, uploadImage, createProject)
router.get('/:cId', authorization, getAllProjectById)
router.get('/detail/:pId', authorization, getProjectById)
router.put('/:pId', authorization, updateProject)
router.delete('/:pId', authorization, deleteProject)

module.exports = router