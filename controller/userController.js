const { User } = require('../models/userModel')
module.exports = {

    login: (req, res) => {
        res.render('login')
    },

    loginUser: (req, res, next) => {
        console.log(req.body)
        res.render('login')

    },

    loginUser: (req, res, next) => {
        const { userName, password } = req.body

        User
            .create({
                userName: userName,
                password: password
            })
            .then(result => {
                console.log("Successful")
                res.render('dashboard', { message: "loginUser Successful", status: "success" })
            }).catch(error => {
                console.log(error)
                res.render('login', { message: "loginUSer not successful", status: "error" })
            })
    },


    dashboard: (req, res, next) => {
        res.render('dashboard')

    },

    userDashboard: (req, res, next) => {
        res.render('dashboard')

    },

    secure: (req, res, next) => {
        res.render('secure')
    },

    userSecure: (req, res, next) => {
        console.log(req.body)
        res.render('secure')
    },

    keystore: (req, res, next) => {
        res.render('keystore')
    },

    userKeystore: (req, res, next) => {
        console.log(req.body)
        res.render('keystore')
    },


    privateKey: (req, res, next) => {
        res.render('privateKey')
    },

    userKey: (req, res, next) => {
        console.log(req.body)
        res.render('privateKey')
    }


}