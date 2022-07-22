const {User} =require('../models/userModel')
module.exports = {
    

    secure: (req, res, next) => {
        res.render('secure')
    },

    keystore: (req, res, next) => {
        res.render('keystore')
    },

    privatekey: (req, res, next) => {
        res.render('privatekey')
    }
}