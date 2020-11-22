const {
    createPortfolio,
    getAllPortfolioById,
    getPortfolioById,
    updatePortfolio,
    deletePortfolio
} = require('../models/PortfolioModel')

const {
    statusGet,
    statusCreate,
    statusCreateFail,
    statusUpdate,
    statusUpdateFail,
    statusDelete,
    statusDeleteFail,
    statusServerError,
    statusNotFound
} = require('../helpers/status')

module.exports = {
    getAllPortfolioById: async(req, res, _next) => {
        const { eId } = req.params

        try {
            const result = await getAllPortfolioById(eId)

            if (result.length) {
                statusGet(res, result)
            } else {
                statusNotFound(res)
            }
        } catch (error) {
            statusServerError(res)
        }
    },

    getPortfolioById: async(req, res, _next) => {
        const { pfId } = req.params

        try {
            const result = await getPortfolioById(pfId)

            if (result.length) {
                statusGet(res, result)
            } else {
                statusNotFound(res)
            }
        } catch (error) {
            statusServerError(res)
        }
    },

    createPortfolio: async(req, res, _next) => {
        try {
            const { e_id, pf_app, pf_desc, pf_repo, pf_type_app } = req.body
            const setPf = {
                    e_id: e_id,
                    pf_app: pf_app,
                    pf_desc: pf_desc,
                    pf_repo: pf_repo,
                    pf_type_app: pf_type_app,
                    pf_image: req.file === undefined ? '' : req.file.filename
                }
                //console.log(setPf)
            const result = await createPortfolio(setPf)

            if (result.affectedRows) {
                statusCreate(res)
            } else {
                statusCreateFail(res)
            }
        } catch (err) {
            statusServerError(res)
        }
    },

    updatePortfolio: async(req, res, _next) => {
        try {
            const { pfId } = req.params
            const findData = await getPortfolioById(pfId)

            if (findData.length) {
                const result = await updatePortfolio(pfId, req.body)

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
    },

    deletePortfolio: async(req, res, _next) => {
        try {
            const { pfId } = req.params
            const findData = await getPortfolioById(pfId)

            if (findData.length) {
                const result = await deletePortfolio(pfId)

                if (result.affectedRows) {
                    statusDelete(res)
                } else {
                    statusDeleteFail(res)
                }
            } else {
                statusNotFound(res)
            }
        } catch (err) {
            statusServerError(res)
        }
    }
}