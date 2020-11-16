const express = require('express')
const router = express.Router()

const {
  createProject,
  getAllProjectById,
  getProjectById,
  updateProject,
  deleteProject
} = require('../controllers/ProjectController')

router.post('/', createProject)
router.get('/:cnId', getAllProjectById)
router.get('/detail/:pjId', getProjectById)
router.put('/:pjId', updateProject)
router.delete('/:pjId', deleteProject)

module.exports = router
