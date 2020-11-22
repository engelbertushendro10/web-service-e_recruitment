const dbConnect = require('../config/database')

module.exports = {
    createProject: (data) => {
        return new Promise((resolve, reject) => {
            const query = `
        INSERT INTO project
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

    getAllProjectById: (cId) => {
        return new Promise((resolve, reject) => {
            const query = `
        SELECT *
          FROM project
         WHERE ?
      `
            dbConnect.query(query, { c_id: cId }, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    getProjectById: (pId) => {
        return new Promise((resolve, reject) => {
            const query = `
        SELECT *
          FROM project
         WHERE ?
      `

            dbConnect.query(query, { p_id: pId }, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    updateProject: (pId, data) => {
        return new Promise((resolve, reject) => {
            const query = `
        UPDATE project
           SET ?
         WHERE p_id = ${pId}
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

    deleteProject: (pId) => {
        return new Promise((resolve, reject) => {
            const query = `
        DELETE FROM project
         WHERE ?
      `

            dbConnect.query(query, { p_id: pId }, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    }
}