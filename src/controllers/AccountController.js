const {
    createAccount,
    updateAccount,
    getAccountById,
    loginAccount
} = require('../models/AccountModel')
    //bcrypt
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv')
const {
    statusNotFound
} = require('../helpers/status')

module.exports = {
    createAccount: async(req, res, _next) => {
        const { username, password, email, type } = req.body
        const salt = bcrypt.genSaltSync(10)
        const bcryptPsw = bcrypt.hashSync(password, salt)

        const setAccount = {
            username: username,
            password: bcryptPsw,
            email: email,
            type: type
        }

        try {
            const result = await createAccount(setAccount)
            console.log(result)
            if (result.affectedRows) {
                res.status(200).send({
                    success: true,
                    message: 'success add account'
                })
            } else {
                res.statu(400).send({
                    success: true,
                    message: 'failed to add acount'
                })
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: 'Internal server eror'
            })
        }
    },

    updateAccount: async(req, res, _next) => {
        const { username, password, email, type } = req.body
        const salt = bcrypt.genSaltSync(10)
        const bcryptPsw = bcrypt.hashSync(password, salt)

        const setAccount = {
            username: username,
            password: bcryptPsw,
            email: email,
            type: type
        }
        try {
            const { accountId } = req.params
            const findData = await getAccountById(accountId)

            if (findData.length) {
                const result = await updateAccount(accountId, setAccount, req.body)

                if (result.affectedRows) {
                    res.status(200).send({
                        success: true,
                        message: 'succes update account'
                    })
                } else {
                    res.status(400).send({
                        success: false,
                        message: 'failed to update'
                    })
                }
            } else {
                statusNotFound(res)
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: 'internal server error'
            })
        }
    },
    // login
    loginAccount: async(req, res) => {

        try {
            //console.log('data ok')
            const { email, password } = req.body
            const login = await loginAccount(email)
            if (login.length >= 1) {
                //  console.log(login[0].password)
                const cekPsw = bcrypt.compareSync(password, login[0].password)
                    // console.log(cekPsw)
                if (cekPsw) {
                    const { acc_id, username, email, type } = login[0]

                    let peyLoad = {
                            acc_id,
                            username,
                            email,
                            type
                        }
                        //secret key harus sama saat generate jwt
                    const token = jwt.sign(peyLoad, process.env.JWT_KEY, { expiresIn: '1h' })
                        //console.log(token);
                    peyLoad = {...peyLoad, token }
                    res.send({
                        success: true,
                        message: 'You are login',
                        data: peyLoad
                    })
                } else {
                    res.status(40).send({
                        success: false,
                        message: 'Email or password wrong'
                    })
                }
            } else {
                //  console.log('data tidak ada')
                res.statu(400).send({
                    success: false,
                    message: 'Email or Account not register'
                })
            }
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Bad request'
            })
        }
    }
}