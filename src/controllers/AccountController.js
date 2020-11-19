const {
  createAccount,
  updateAccount,
  getAccountById 
} = require('../models/AccountModel')
//bcrypt
const bcrypt = require('bcrypt')


const {
  statusNotFound
} = require('../helpers/status')

module.exports = {
  createAccount: async (req, res, _next) => {
    const {username, password, email, type} = req.body
    const salt = bcrypt.genSaltSync(10)
    const bcryptPsw = bcrypt.hashSync(password, salt)

    const setAccount = {
      username : username,
      password : bcryptPsw,
      email : email,
      type : type
    }

    try {
      const result = await createAccount(setAccount)
      console.log(result)
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
    const {username, password, email, type} = req.body
    const salt = bcrypt.genSaltSync(10)
    const bcryptPsw = bcrypt.hashSync(password, salt)

    const setAccount = {
      username : username,
      password : bcryptPsw,
      email : email,
      type : type
    }
    try {
      const { accountId } = req.params
      const findData = await getAccountById(accountId)

      if (findData.length) {
        const result = await updateAccount(accountId, setAccount, req.body)

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
  },
  // login
  // accountLogin:(req,res)=>{

  // }
}
