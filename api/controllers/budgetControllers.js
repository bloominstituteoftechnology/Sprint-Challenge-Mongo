const Budget = require('../models/budget');

const createBudget = budgetInfo => {
  return new Budget(budgetInfo).save();
};

module.exports = { createBudget };
