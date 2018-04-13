const express = require('express');


const router = express.Router();
const expenses = require('./expensesRouter.js')


router
.route('/')
.get((req,res) =>{
    expenses.find({})
    .then(expenses =>{
        res.status(200).json(expenses);
    })
    .catch(err =>{
        res.status(500).json({ errorMessage: 'The budgets information could not be retrieved.' })
    });
})

.post((req, res) =>{
    const expenses = new expenses(req.body);
    expenses.save()
.then(addedExpenses =>{
    
        res.status(201).json(addedExpenses);
    })
    .catch(err =>res.status(500).json(err));
});
module.exports = router;