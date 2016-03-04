'use strict'

const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const bodyParser = require('body-parser')

const routes = require('./routes/')


//create paths to public directory:
app.use(express.static('public'));

//middleware:
app.use(bodyParser.urlencoded({
  extended:false
}))

//routes:
app.use(routes)


//tell server to listen on specified port:
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})
