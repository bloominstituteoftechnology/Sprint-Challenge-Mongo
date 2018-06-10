const express = require('express')
const router = express.Router()

const Category = require('./Category.js')

// add endpoints here
router.get('/', (req, res) => res.json('Hey, this endpoint works!'))
module.exports = router
