const router = require('express').Router();
const Budget = require('./budgetModel')
const express = require('express');


router
    .route('/')
    .post( (req, res) => {
        const { title, budget } = req.body
        const newBudget = new Budget({ title, budget });
        newBudget   
            .save()
            .then(savedBudget => {
                console.log(savedBudget)
                
            })
    })






module.exports = router;






