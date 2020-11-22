const dbConnect = require('../config/database')
const { formatDate } = require('../helpers/date')

module.exports = {
    createHire: (data) => {
        return new Promise((resolve, reject) => {
            const query = `
        INSERT INTO hire
                SET ?
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

    getAllHireByEngineer: (eId) => {
        return new Promise((resolve, reject) => {
            const query = `
        SELECT *
          FROM hire
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

    getAllHireByProject: (pId) => {
        return new Promise((resolve, reject) => {
            const query = `
        SELECT *
          FROM hire hr
          JOIN project p
            ON (p.p_id = hr.p_id)
         WHERE p.p_id = ?
      `
            dbConnect.query(query, pId, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    getHireById: (hrId) => {
        return new Promise((resolve, reject) => {
            const query = `
        SELECT *
          FROM hire
         WHERE ?
      `

            dbConnect.query(query, { hr_id: hrId }, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    updateHireStatus: (hrId, data) => {
        return new Promise((resolve, reject) => {
            const date = new Date()

            data = {
                hr_date_confirm: formatDate(date)
            }

            const query = `
        UPDATE hire
           SET ?
         WHERE hr_id = ${hrId}
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