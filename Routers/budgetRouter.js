const express = require('express');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Budget = require('../Models/budgetModel');
const Expenses = require('../Models/expenseModel');

const router = express.Router();

router.post('/', (req, res) => {
  const bud = new Budget(req.body);

  bud.save()
    .then(bud => {
      res.status(200).send(bud);
    })
    .catch(err => {
      res.status(400).send({ msg: 'There was an error saving that budget', error: err });
    });
});

router.get('/:id/summary', (req, res) => {
  const budgetId = req.params.id;

  Expenses.aggregate([
    {$match: {
      'budget': ObjectId(budgetId)
    }},
    {$group: {
      _id: 'amount',
      totalExp: {
        $sum: '$amount'
      }
    }}
  ])
  .then(tot => {
    Budget.findById(budgetId)
      .then(budg => {
        const remainingBudget = +budg.amount - +tot[0].totalExp;
        res.send({ remainingBudget });
      })
      .catch(err => {
        res.status(500).send({ error: err });
      })
  })
  .catch(err => {
    res.status(500).send({ error: err });
  })

});

router.get('/', (req, res) => {
  Budget.find()
    .then(budg => {
      res.send(budg);
    })
});

module.exports = router;