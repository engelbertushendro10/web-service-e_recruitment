const {
  createAccount,
  updateAccount,
  getAccountById
} = require('../models/AccountModel')

const {
  statusNotFound
} = require('../helpers/status')

module.exports = {
  createAccount: async (req, res, _next) => {
    try {
      const result = await createAccount(req.body)

      if (result.affectedRows) {
        res.status(200).send({
          success: true,
          message: 'success add account'
        })
      } else {
        res.statu(400).send({
          success: true,
          message: 'failed to add acount'
        })
      }
    } catch (err) {
      res.status(500).send({
        success: false,
        message: 'Internal server eror'
      })
    }
  },

  updateAccount: async (req, res, _next) => {
    try {
      const { acId } = req.params
      const findData = await getAccountById(acId)

      if (findData.length) {
        const result = await updateAccount(acId, req.body)

        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: 'succes update account'
          })
        } else {
          res.status(400).send({
            success: false,
            message: 'failed to update'
          })
        }
      } else {
        statusNotFound(res)
      }
    } catch (err) {
      res.status(500).send({
        success: false,
        message: 'internal server error'
      })
    }
  }
}
