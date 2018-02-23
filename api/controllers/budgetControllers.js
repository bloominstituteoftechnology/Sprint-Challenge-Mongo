const Budget = require('../models/budget');

const createBudget = budgetInfo => {
  return new Budget(budgetInfo).save();
};

const getBudgetSummary = budgetId => {
  return new Budget.find();
};

module.exports = { createBudget, getBudgetSummary };
