const {
  createPortfolio,
  getAllPortfolioById,
  getPortfolioById,
  updatePortfolio,
  deletePortfolio
} = require('../models/PortfolioModel')

const {
  statusGet,
  statusCreate,
  statusCreateFail,
  statusUpdate,
  statusUpdateFail,
  statusDelete,
  statusDeleteFail,
  statusServerError,
  statusNotFound
} = require('../helpers/status')

module.exports = {
  getAllPortfolioById: async (req, res, _next) => {
    const { enId } = req.params

    try {
      const result = await getAllPortfolioById(enId)

      if (result.length) {
        statusGet(res, result)
      } else {
        statusNotFound(res)
      }
    } catch (error) {
      statusServerError(res)
    }
  },

  getPortfolioById: async (req, res, _next) => {
    const { prId } = req.params

    try {
      const result = await getPortfolioById(prId)

      if (result.length) {
        statusGet(res, result)
      } else {
        statusNotFound(res)
      }
    } catch (error) {
      statusServerError(res)
    }
  },

  createPortfolio: async (req, res, _next) => {
    try {
      const result = await createPortfolio(req.body)

      if (result.affectedRows) {
        statusCreate(res)
      } else {
        statusCreateFail(res)
      }
    } catch (err) {
      statusServerError(res)
    }
  },

  updatePortfolio: async (req, res, _next) => {
    try {
      const { prId } = req.params
      const findData = await getPortfolioById(prId)

      if (findData.length) {
        const result = await updatePortfolio(prId, req.body)

        if (result.affectedRows) {
          statusUpdate(res)
        } else {
          statusUpdateFail(res)
        }
      } else {
        statusNotFound(res)
      }
    } catch (err) {
      statusServerError(res)
    }
  },

  deletePortfolio: async (req, res, _next) => {
    try {
      const { prId } = req.params
      const findData = await getPortfolioById(prId)

      if (findData.length) {
        const result = await deletePortfolio(prId)

        if (result.affectedRows) {
          statusDelete(res)
        } else {
          statusDeleteFail(res)
        }
      } else {
        statusNotFound(res)
      }
    } catch (err) {
      statusServerError(res)
    }
  }
}
