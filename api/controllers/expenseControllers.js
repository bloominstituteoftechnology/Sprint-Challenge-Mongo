const Expense = require('../models/expense');

async function createExpense(req, res) {
  const { 
    amount,
    description,
    budget, 
    category
  } = req.body;
  try {
    const expense = await Expense.create({
      amount, description, budget, category
    });
    res.status(200).json(expense);
  } catch (err) {
    res.status(422).json({err: err.message});
  }
}

async function getExpenses(req, res) {
  try {
    const expenses = await Expense.find().populate('category').populate('budget');
    res.status(200).json(expenses);
  } catch (err) {
    res.status(422).json({err: err.message});
  }
}
module.exports = {
  createExpense,
  getExpenses
}