const express = require("express");
const Budget = require('../Budget/Budget.js');
const Category = require('../Category/Category.js');
const Expense = require('./Expense.js');
const router = express.Router();
const mongoose = require("mongoose");

router.route('/').post(async (req, res) => {
    try {
        let expense = new Expense({
            amount: req.body.amount,
            description: req.body.description
        })
        expense.save(function (err, post) {
            if(err) {return next(err)}
            res.status(201).json(expense)
        })
    } catch (error){
        res.status(500).json({error: error});
    }
})

router.route('/').get(async (req, res) => {
    try{
        const expenses = await Expense.find({})
        res.status(200).json({expenses})
    } catch(error){
        res.status(500).json({error: getError});
    }
})

module.exports = router;