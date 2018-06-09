const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

router.get('/', (req, res) => {
    Budget.find()
        .then(res => {
            res.status(200).json(res)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;