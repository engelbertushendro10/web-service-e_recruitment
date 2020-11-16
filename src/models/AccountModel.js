const dbConnect = require('../config/database')

const { createEngineer } = require('../models/EngineerModel')
const { createCompany } = require('../models/CompanyModel')

module.exports = {
  createAccount: (data) => {
    return new Promise((resolve, reject) => {
      const dataAccount = {
        username: data.username,
        email: data.email,
        password: data.password,
        type: data.type
      }
      const query = `
        INSERT INTO account SET ? `
      dbConnect.query(query, dataAccount, async (err, res, _fields) => {
        if (!err) {
          if (data.type === 'enginer') {
            await createEngineer(res.insertId)
          } else {
            await createCompany({
              ac_id: res.insertId,
              c_name: data.username
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
