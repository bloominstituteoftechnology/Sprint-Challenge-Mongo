const express = require('express')
const Budget = require('../models/Budget')

const router = express.Router()

router
    .route('/')
    .post((req, res) => {
        const { title, budget } = req.body
        const newBudget = new Budget({ title, budget })
        newBudget.save()
            .then(result => {
                console.log(result)
                res.status(201).json(result)
            })
            .catch(err => console.log(err))
    })

module.exports = router;