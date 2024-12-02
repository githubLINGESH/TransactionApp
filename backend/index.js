const express = require("express");
const bodyparser = require('body-parser')
const router = require('./routes/index')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use('/api/v1',router)




app.listen(3000)
    