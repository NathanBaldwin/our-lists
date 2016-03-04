'use strict'

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

//middleware:
app.use(bodyParser.urlencoded({
  extended:false
}))

//routes:
app.get('/', (req, res) => {
  res.send('home page')
})

//tell server to listen on specified port:
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})
