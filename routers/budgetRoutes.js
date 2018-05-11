const router = require('express').Router();
const Budget = require('../data/Budget');

//set end points here
router.get('/', (req, res) => {
    Budget
    .find()
    .then(budgets => {
        res.status(200).json(budgets);
    })
    .catch(err => {
        res.status(500).json({ errorMsg: 'The budget could not be found.'})
    })
})

//Postman Test ok! http://localhost:5000/api/budgets (3000 budget created)
router.post('/', (req, res) => {
   const { title, budgetAmount } = req.body;
    const newBudget = { title, budgetAmount };
    const budget = new Budget(newBudget);
    budget.save().then(budget => {
        res.status(201).json(budget);
    })
    .catch(err => {
        res.status(500).json({ errorMsg: 'Sorry budget could not be created.' });
    })
})


//module export
module.exports = router;


