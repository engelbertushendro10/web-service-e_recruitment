const {
  getAllCompany,
  getCompanyById,
  updateCompany
} = require('../models/CompanyModel')

const {
  statusGet, statusUpdate, statusUpdateFail, statusServerError, statusNotFound
} = require('../helpers/status')

module.exports = {
  getAllCompany: async (_req, res, _next) => {
    try {
      const result = await getAllCompany()

      if (result.length) {
        statusGet(res, result)
      } else {
        statusNotFound(res)
      }
    } catch (error) {
      statusServerError(res)
    }
  },

  getCompanyById: async (req, res, _next) => {
    const { compId } = req.params

    try {
      const result = await getCompanyById(compId)

      if (result.length) {
        statusGet(res, result)
      } else {
        statusNotFound(res)
      }
    } catch (error) {
      statusServerError(res)
    }
  },

  updateCompany: async (req, res, _next) => {
    try {
      const { compId } = req.params
      const findData = await getCompanyById(compId)

      if (findData.length) {
        const result = await updateCompany(compId, req.body)

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
  }
}
