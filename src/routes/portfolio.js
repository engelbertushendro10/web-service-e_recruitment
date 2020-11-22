const express = require('express')
const router = express.Router()
    //const multer = require('multer')
const { authorization } = require('../midleware/auth')
const upload = require('../midleware/multer')

const {
    createPortfolio,
    getAllPortfolioById,
    getPortfolioById,
    updatePortfolio,
    deletePortfolio
} = require('../controllers/PortfolioController')


router.post('/', authorization, upload, createPortfolio)
router.get('/:eId', getAllPortfolioById)
router.get('/detail/:pfId', getPortfolioById)
router.put('/:pfId', updatePortfolio)
router.delete('/:pfId', deletePortfolio)

module.exports = router