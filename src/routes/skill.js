const express = require('express')
const router = express.Router()

const {
  createSkill,
  getAllSkillById,
  getSkillById,
  updateSkill,
  deleteSkill
} = require('../controllers/SkillController')

router.post('/', createSkill)
router.get('/:enId', getAllSkillById)
router.get('/detail/:skId', getSkillById)
router.put('/:skId', updateSkill)
router.delete('/:skId', deleteSkill)

module.exports = router
