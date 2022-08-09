const express = require('express')
const router = express.Router();
const userRouter = require('../controller/userController')

router.get('/secure', userRouter.secure)
router.post('/secure', userRouter.userSecure)

router.get('/keystore', userRouter.keystore)
router.post('/keystore', userRouter.userKeystore)

router.get('/private', userRouter.privateKey)
router.post('/private', userRouter.userKey)




module.exports = router