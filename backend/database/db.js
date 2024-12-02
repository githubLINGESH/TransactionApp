const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sharaan225:eGe1E2DT6IwUWG66@cohortdb.ronum.mongodb.net/paytmClone")

const userSchema = new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    password:String
})

const AccountSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true},
    balance:{
        type:Number,
        required:true
    }
})


const User = mongoose.model('Users',userSchema)
const Account = mongoose.model('Account',AccountSchema)

module.exports = {
    User,
    Account
}