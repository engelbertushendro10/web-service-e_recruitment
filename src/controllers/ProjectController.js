const {
    createProject,
    getAllProjectById,
    getProjectById,
    updateProject,
    deleteProject
} = require('../models/ProjectModel')

const {
    statusGet,
    statusCreate,
    statusCreateFailed,
    statusUpdate,
    statusUpdateFail,
    statusDelete,
    statusDeleteFail,
    statusServerError,
    statusNotFound
} = require('../helpers/status')
    //const { authorization } = require('../helpers/auth')

module.exports = {
    getAllProjectById: async(req, res, _next) => {
        const { cId } = req.params

        try {
            const result = await getAllProjectById(cId)

            if (result.length) {
                statusGet(res, result)
            } else {
                statusNotFound(res)
            }
        } catch (error) {
            statusServerError(res)
        }
    },

    getProjectById: async(req, res, _next) => {
        const { pId } = req.params

        try {
            const result = await getProjectById(pId)

            if (result.length) {
                statusGet(res, result)
            } else {
                statusNotFound(res)
            }
        } catch (error) {
            statusServerError(res)
        }
    },

    createProject: async(req, res, _next) => {
        try {
            const result = await createProject(req.body)

            if (result.affectedRows) {
                statusCreate(res)
            } else {
                statusCreateFailed(res)
            }
        } catch (err) {
            statusServerError(res)
        }
    },

    updateProject: async(req, res, _next) => {
        try {
            const { pId } = req.params
            const findData = await getProjectById(pId)

            if (findData.length) {
                const result = await updateProject(pId, req.body)

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

    deleteProject: async(req, res, _next) => {
        try {
            const { pId } = req.params
            const findData = await getProjectById(pId)

            if (findData.length) {
                const result = await deleteProject(pId)

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