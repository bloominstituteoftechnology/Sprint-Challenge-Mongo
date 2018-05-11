const router = require('express').Router();

const Budget = require('./budgetModel');

router.get('/', function get(req, res) {
    Budget.find()
     .then(budgets=>
      res.status(200).json(budgets));
    });

router.post('/', function post(req, res) {
    const budgetData = req.body;
    const budget = new Budget (budgetData);
    budget
      .save()
      .then(budget => {
        res.status(201).json(budget);
      })
      .catch(err => res.status(500).json({errorMessage: 'Cant Mang.'}));
    });

module.exports = router;