const mongoose = require('mongoose');

const Budget = require('../models/budget');
const Expense = require('../models/expense');

const budgetCreate = (req, res) => {
  const budgetInfo = req.body;
  const { title, budgetAmount } = req.body;
  const budget = new Budget(budgetInfo);


  if (!title || !budgetAmount) {
    res.status(500).json({error: 'You must provide the title and budgetAmount for your budget.'})
  } else {
    budget.save()
      .then(budget => {
        res.status(200).json(budget);
      })
      .catch(error => {
        res.status(500).json({error})
      })
  }
};

const budgetSummary = (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!id) {
    res.status(500).json({error: 'You must provide a budget id in order to get the summary'});
  } else {
    Expense.aggregate([ {
      $group: {
        _id: null,
        expenseTotal: {$sum: '$amount'}
      }}])
      .then(total => {
        const expenses = total[0].expenseTotal;
        Budget.findById(id)
          .then(budget => {
            const difference = {
              remaining: budget.budgetAmount - expenses,
              budget: budget.budgetAmount,
              expenses
            }
            res.status(200).json(difference)
          })
          .catch(error => {
            res.status(500).json({error: 'There was an error retrieving the budget from the server.'});
          })
      })
      .catch(error => {
        res.status(500).json({error: 'There seems to be a problem aggregating the sum of expenses'});
      })
  }
}


module.exports = {
  budgetCreate,
  budgetSummary
}