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
    const { cnId } = req.params

    try {
      const result = await getCompanyById(cnId)

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
      const { cnId } = req.params
      const findData = await getCompanyById(cnId)

      if (findData.length) {
        const result = await updateCompany(cnId, req.body)

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
