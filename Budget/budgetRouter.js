const express = require("express");
const Budget = require('./Budget.js');
const router = express.Router();
const mongoose = require("mongoose");

router.route('/').post(async (req, res) => {
    try {
        let budget = new Budget({
            title: req.body.title,
            budgetAmount: req.body.budgetAmount
        })
        budget.save(function (err, post) {
            if(err) {return next(err)}
            res.status(201).json(budget)
        })
    } catch (error){
        res.status(500).json({error: error});
    }
})

module.exports = router;