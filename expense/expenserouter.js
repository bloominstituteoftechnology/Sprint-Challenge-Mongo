const express = require('express')
const Expense = require('./expense.js');
const Category = require('../category/category.js');
const Budget = require('../budget/budget.js');

const router = express.Router();


    
router
.route('/')
.post((req, res) => {
    const { body } = req;

    const budgetObject = body.budget;
    const categoryObject = body.category;
    // const { id } = req.params;
    const expense = new Expense(body);

    

    const query = expense.save()
        .then(expense => {
            res.status(200).json(expense)
        })
        .catch(err => {
            res.status(500).json({
                error: 'error with expense'
            })
        })

})
    
    
//     res.status(200).json({success: 'server starting expenses'})
// })
module.exports = router;