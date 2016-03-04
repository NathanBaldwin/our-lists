'use strict'

const express = require('express')
const router = express.Router()

//path modules:
const home = require('./home')

router.use(home)

module.exports = router;
