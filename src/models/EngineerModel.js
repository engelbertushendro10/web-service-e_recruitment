const dbConnect = require('../config/database')

module.exports = {
    createEngineer: (acountId) => {
        return new Promise((resolve, reject) => {
            const query = `
        INSERT INTO enginer
                SET ?
      `
            dbConnect.query(query, { acc_id: acountId }, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },
    getAllEngineer: () => {
        return new Promise((resolve, reject) => {
            const query = `
      SELECT * FROM enginer en JOIN account acc ON acc.acc_id = en.acc_id `
            dbConnect.query(query, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    getSearchEngineer: (paginate) => {
        return new Promise((resolve, reject) => {
            const query = `
                      SLECT e_name, e_addres, e_skill FROM enginer WHERE '${paginate}'
                        LIKE '%${paginate.search}%'
                       LIMIT ${paginate.limit} 
                      OFFSET ${paginate.offset}
                    `

            dbConnect.query(query, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },


    getEngineerById: (eId) => {
        return new Promise((resolve, reject) => {
            const query = `
        SELECT en.e_id,
               ac.acc_id,
               en.e_name,
               en.e_addres,
               en.e_skill,
               en.e_github,
               en.e_sosmed
          FROM enginer en
          JOIN account ac
            ON ac.acc_id = en.acc_id
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

    getFilterEngineer: (paginate) => {
        return new Promise((resolve, reject) => {
            const filter = parseInt(paginate.filter)
            let fill

            if (filter === 0) {
                fill = 'ac.username'
            } else if (filter === 1) {
                fill = 'en.e_skill'
            } else if (filter === 2) {
                fill = 'e_name'
            } else if (filter === 3 || filter === 4) {
                fill = 'en.e_addres'
            }

            const query = `
              SELECT en.e_id,
                     ac.acc_id,
                     ac.username,
                     en.e_skill,
                     en.e_address,
                     en.e_name
                FROM enginer en
                JOIN account ac
                  ON ac.acc_id = en.acc_id
            ORDER BY ${fill}
               LIMIT ${paginate.limit} 
              OFFSET ${paginate.offset}
            `

            dbConnect.query(query, (error, results, _fields) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    updateEngineer: (eId, acountId) => {
        return new Promise((resolve, reject) => {
            const query = `
        UPDATE enginer
           SET ?
         WHERE e_id = ${eId}
      `

            dbConnect.query(query, acountId, (error, results, _fields) => {
                if (!error) {
                    // console.log(query)
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    }
}