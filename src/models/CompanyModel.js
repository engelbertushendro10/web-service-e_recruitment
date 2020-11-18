const dbConnect = require('../config/database')

module.exports = {
  createCompany: (data) => {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO company
                SET ? `

      dbConnect.query(query, data, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  getAllCompany: () => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT * FROM company comp JOIN account acc ON acc.acc_id = comp.ac_id `

      dbConnect.query(query, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  getCompanyById: (compId) => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT *
          FROM company comp
          JOIN account acc ON acc.acc_id = comp.ac_id
         WHERE ?
      `

      dbConnect.query(query, { c_id: compId }, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  updateCompany: (compId, data) => {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE company SET ? WHERE c_id = ${compId}
      `

      dbConnect.query(query, data, (error, results, _fields) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  }
}
