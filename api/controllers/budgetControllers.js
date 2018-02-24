const Budget = require('../models/budget.js');

const createBudget = budgetInfo => {
	return Budget(budgetInfo).save();
};


module.exports = { createBudget };