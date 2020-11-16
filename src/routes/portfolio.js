const express = require('express')
const router = express.Router()

const {
  createPortfolio,
  getAllPortfolioById,
  getPortfolioById,
  updatePortfolio,
  deletePortfolio
} = require('../controllers/PortfolioController')

router.post('/', createPortfolio)
router.get('/:enId', getAllPortfolioById)
router.get('/detail/:prId', getPortfolioById)
router.put('/:prId', updatePortfolio)
router.delete('/:prId', deletePortfolio)

module.exports = router
