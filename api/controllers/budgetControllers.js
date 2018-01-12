const Budget = require('../models/budget');

async function createBudget(req, res) {
  try {
    const {title, budgetAmount} = req.body;
    const budget = await Budget.create({title, budgetAmount});
    res.status(200).json(budget);
  } catch (err) {
    res.status(422).json({err: err.message});
  }
}

module.exports = {
  createBudget
}