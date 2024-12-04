const express = require("express");
const bodyparser = require('body-parser')
const router = require('./routes/index')
const cors = require('cors')
const app = express()
app.use(cors({
    origin: 'https://dealon.onrender.com',
    credentials: true
}));
app.set('trust proxy', 1);
app.use(cors({origin:"https://transactionapp-m0m6.onrender.com/"}))
app.use(bodyparser.json())
app.use('/api/v1',router)

console.log("In index")


app.listen(3000)
    