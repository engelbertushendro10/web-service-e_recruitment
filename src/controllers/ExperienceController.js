const {
    createExp,
    getAllExpById,
    getExpById,
    updateExp,
    deleteExp
} = require('../models/ExperienceModel')
const {
    statusGet,
    statusUpdate,
    statusUpdateFail,
    statusServerError,
    statusNotFound
} = require('../helpers/status')

module.exports = {
    getAllExpById: async(req, res, _next) => {
        const { exId } = req.params

        try {
            const result = await getAllExpById(exId)

            if (result.length) {
                res.status(200).send({
                    success: true,
                    message: `experience with ${exId}`
                })
            } else {
                res.send(404).send({
                    success: false,
                    message: 'experience not found'
                })
            }
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Internal Server Eror'
            })
        }
    },

    getExpById: async(req, res, _next) => {
        const { exId } = req.params

        try {
            const result = await getExpById(exId)

            if (result.length) {
                res.status(200).send({
                    success: true,
                    message: `data with ${exId}`
                })
            } else {
                res.status(404).send({
                    success: false,
                    message: 'Data experience not found'
                })
            }
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Internal Server Eror !'
            })
        }
    },

    createExp: async(req, res, _next) => {
        try {
            const result = await createExp(req.body)

            if (result.affectedRows) {
                res.status(200).send({
                    success: true,
                    message: 'Succeess add experience'
                })
            } else {
                res.status(400).send({
                    success: false,
                    message: 'failed to add experience'
                })
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: 'Internal server error!'
            })
        }
    },

    updateExp: async(req, res, _next) => {
        try {
            const { exId } = req.params
            const findData = await getExpById(exId)

            if (findData.length) {
                const result = await updateExp(exId, req.body)

                if (result.affectedRows) {
                    res.status(200).send({
                        success: true,
                        message: 'success update account'
                    })
                } else {
                    res.status(400).send({
                        success: false,
                        message: 'failed to update experience'
                    })
                }
            } else {
                res.status(404).send({
                    success: false,
                    message: 'data not found'
                })
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: 'internal server error!'
            })
        }
    },

    deleteExp: async(req, res, _next) => {
        try {
            const { exId } = req.params
            const findData = await getExpById(exId)

            if (findData.length) {
                const result = await deleteExp(exId)

                if (result.affectedRows) {
                    res.status(200).send({
                        success: true,
                        message: `data with ${exId} hasbeen deleted`
                    })
                } else {
                    res.status(400).send({
                        success: false,
                        message: 'failed to delete experience'
                    })
                }
            } else {
                res.status(404).send({
                    success: false,
                    message: 'data not found'
                })
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: 'internal server error'
            })
        }
    }
}