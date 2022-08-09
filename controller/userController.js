const { User } = require('../models/userModel')
module.exports = {


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