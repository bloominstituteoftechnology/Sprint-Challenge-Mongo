const router = require('express').Router();

const mongoose = require('mongoose');

const expM = require('./expenseModel.js');
const budM = require('../budget/budgetModel.js');
const catM = require ('../category/categoryModel.js');

router.route('/')
    .post((req, res) =>{
        if(req.body.amount && req.body.description && req.body.budget && req.body.category){
            const exp = new expM(req.body);
            exp
            .save()
            .then(newex =>{
                res.status(200).json(newex)
            });
        }
        else{
            res.status(400).json({message: 'Enter an amount, description, budget, and category.'})
        }
        
    })
    .get((req, res) => {
        expM
        .find()
        .populate('budget category')
        .then(ex => {
            res.status(200).json(ex)
        })
        .catch(error => {
            res.status(500).json({error: 'Could not retrieve expenses.'})
        })
    })

// router.route('/',)

module.exports = router;