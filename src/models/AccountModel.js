//const bcrypt = require ('bcrypt')
const dbConnect = require('../config/database')
const { createEngineer } = require('../models/EngineerModel')
const { createCompany } = require('../models/CompanyModel')

module.exports = {
  createAccount: (setAccount) => {
    return new Promise((resolve, reject) => {
      dbConnect.query ('INSERT INTO account SET ?', setAccount, async (err, res, _fields) => {
        if (!err) {
          if (setAccount.type === 'enginer') {
            await createEngineer(res.insertId)
          } else {
            await createCompany({
              ac_id: res.insertId,
              c_name: username
            })
          }
          resolve(res)
        } else {
          reject(err)
        }
      })
    })
  },

  updateAccount: (accountId, data) => {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE account
           SET ?
         WHERE acc_id = ${accountId}
      `

      dbConnect.query(query, data, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  getAccountById: (accountId) => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT *
          FROM account
         WHERE ?
      `

      dbConnect.query(query, { acc_id: accountId }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  getAccountByEmail: (acEmail) => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT *
          FROM account
         WHERE ?
      `

      dbConnect.query(query, { ac_email: acEmail }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  }
}
