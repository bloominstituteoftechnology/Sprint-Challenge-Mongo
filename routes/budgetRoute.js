const express = require('express')
const Budget = require('../models/Budget')

const router = express.Router()

router
    .route('/')
    .post((req, res) => {
        const { title, budget } = req.body
        // Data Sanitization: 
        title === undefined || typeof (title) != "string" ? res.status(400).json({ error: "Please provide an adequate title" }) : null
        budet === undefined || typeof (budget) != "number" || budget < 0 ? res.status(400).json({ error: "Please provide an adequate budget" }) : null
        const newBudget = new Budget({ title, budget })
        newBudget.save()
            .then(result => {
                console.log(result)
                res.status(201).json(result)
            })
            .catch(err => console.log(err))
    })

module.exports = router;