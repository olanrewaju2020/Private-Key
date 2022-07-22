const express = require('express')
const router =express.Router();
const userRouter =require('../controller/userController')

router.get('/',userRouter.welcome)
router.get('/secure', userRouter.secure)
router.get('/keystore', userRouter.keystore)
router.get('/private', userRouter.privatekey)



module.exports = router