const dbConnect = require('../config/database')

module.exports = {
    createPortfolio: (setPf) => {
        return new Promise((resolve, reject) => {
            const query = `
        INSERT INTO portfolio
                SET ?
      `
            dbConnect.query(query, setPf, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    getAllPortfolioById: (eId) => {
        return new Promise((resolve, reject) => {
            const query = `
        SELECT *
          FROM portfolio
         WHERE ?
      `

            dbConnect.query(query, { e_id: eId }, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    getPortfolioById: (pfId) => {
        return new Promise((resolve, reject) => {
            const query = `
        SELECT *
          FROM portfolio
         WHERE ?
      `

            dbConnect.query(query, { pf_id: pfId }, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    updatePortfolio: (pfId, setPf) => {
        return new Promise((resolve, reject) => {
            const query = `
        UPDATE portfolio
           SET ?
         WHERE pf_id = ${pfId}
      `

            dbConnect.query(query, setPf, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    deletePortfolio: (pfId) => {
        return new Promise((resolve, reject) => {
            const query = `
        DELETE FROM portfolio
         WHERE ?
      `

            dbConnect.query(query, { pf_id: pfId }, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    }
}