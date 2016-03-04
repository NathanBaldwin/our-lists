'use strict'

const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.sendfile('./public/our-list-app/www/index.html')//can't use alternative
})

module.exports = router
