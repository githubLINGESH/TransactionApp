const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const accountRouter = require('../routes/account')
router.use('/user',userRouter)
router.use('/account',accountRouter)

router.get('/',(req,res)=>{
    console.log("In router")
    res.end()
})

module.exports = 
    router