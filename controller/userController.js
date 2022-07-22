module.exports = {
    welcome: (req, res, next) => {
        res.render('welcome')
    },

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