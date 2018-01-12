const mongoose = require('mongoose');

const Budget = require('../models/budget');

const STATUS_USER_ERROR = 422;

const budgetCreate = (req, res) => {
  const { title, budgetAmount } = req.body;
  const newBudget = new Budget({ title, budgetAmount });
  newBudget.save()
    .then((createdBudget) => {
      res.json(createdBudget);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR).json({ errorMessage: err.message });
      return;
    });
};

const budgetSummary = (req, res) => {
  const { id } = req.params;
  Budget.findById(id)
    .aggregate(
      [{$group : { _id : 'expenses' }}]
    )
    .exec()
    .then(budget => {
      if (budget === null) throw new Error();

      

    })
}

// app.route('/budget/:id/summary').get(budgetControllers.budgetSummary);


module.exports = {
  budgetCreate,
  budgetSummary
};