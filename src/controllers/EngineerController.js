const {
    getAllEngineer,
    getSearchEngineer,
    getEngineerById,
    updateEngineer,
    getFilterEngineer
} = require('../models/EngineerModel')

const {
    statusGet,
    statusUpdate,
    statusUpdateFail,
    statusServerError,
    statusNotFound
} = require('../helpers/status')

module.exports = {
    getAllEngineer: async(req, res, _next) => {
        let { search, limit, page } = req.query

        if (!limit) {
            limit = 10
        } else {
            limit = parseInt(limit)
        }

        if (!page) {
            page = 1
        } else {
            page = parseInt(page)
        }

        const paginate = {
            search: search,
            limit: limit,
            offset: (page - 1) * limit
        }

        try {
            let result

            if (!search) {
                result = await getAllEngineer(paginate)
            } else {
                result = await getSearchEngineer(paginate)
            }

            if (result.length) {
                statusGet(res, result)
            } else {
                statusNotFound(res)
            }
        } catch (error) {
            //   console.log(error)
            statusServerError(res)
        }
    },

    getEngineerById: async(req, res, _next) => {
        const { eId } = req.params

        try {
            const result = await getEngineerById(eId)

            if (result.length) {
                statusGet(res, result)
            } else {
                statusNotFound(res)
            }
        } catch (error) {
            statusServerError(res)
        }
    },

    getFilterEngineer: async(req, res, _next) => {
        let { filter, limit, page } = req.query

        if (!limit) {
            limit = 10
        } else {
            limit = parseInt(limit)
        }

        if (!page) {
            page = 1
        } else {
            page = parseInt(page)
        }

        const paginate = {
            filter: filter,
            limit: limit,
            offset: (page - 1) * limit
        }

        try {
            let result

            if (isEmpty(filter)) {
                result = await getAllEngineer(paginate)
            } else {
                result = await getFilterEngineer(paginate)
            }

            if (result.length) {
                statusGet(res, nestedEngineer(result))
            } else {
                statusNotFound(res)
            }
        } catch (error) {
            console.error(error)
            statusServerError(res)
        }
    },
    updateEngineer: async(req, res, _next) => {
        try {
            const { eId } = req.params
            const findData = await getEngineerById(eId)

            if (findData.length) {
                const result = await updateEngineer(eId, req.body)

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