const express = require('express');
const budgets = require('./budgetRouter.js')

const router = express.Router();



router
.route('/')
.get((req,res) =>{
    budget.find({})
    .then(budgets =>{
        res.status(200).json(budgets);
    })
    .catch(err =>{
        res.status(500).json({ errorMessage: 'The budgets information could not be retrieved.' })
    });
})

.post((req, res) =>{
    const budget = new budget(req.body);
    budget.save()
.then(addedBudget =>{
    
        res.status(201).json(addedBudget);
    })
    .catch(err =>res.status(500).json(err));
});
module.exports = router;