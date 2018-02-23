const Budget = require('../models/budget');

const createBudget = budgetInfo => {
  return Budget(budgetInfo).save();
};

const getBudget = budgetId => {
  return Budget.findOne({ _id: budgetId }).select('budgetAmount');
};

module.exports = { createBudget, getBudget };
