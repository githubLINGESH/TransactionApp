const express = require("express");
const bodyparser = require('body-parser')
const router = require('./routes/index')
const cors = require('cors')
const app = express()
const allowedOrigins = [
  'https://dealon.onrender.com',
  'https://transactionapp-m0m6.onrender.com',
  'https://transaction-appv1.netlify.app',
];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(bodyparser.json())
app.use('/api/v1',router)

console.log("In index")


app.listen(3000)
    