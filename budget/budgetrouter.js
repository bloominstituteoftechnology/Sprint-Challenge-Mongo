const express = require('express')

const router = express.Router();
const Budget = require('./budget.js')

router
.route('/').post((req, res) => {
    
     const { body } = req;
    const budget = new Budget(body)
    
    budget.save()
        .then(budgets => {
            res.status(200).json(budgets)
        })
        .catch(err => {
            res.status(500).json({error: 'issues with budget'})
        })

    // res.status(200).json({success: 'server starting budget'})
})





module.exports = router;

