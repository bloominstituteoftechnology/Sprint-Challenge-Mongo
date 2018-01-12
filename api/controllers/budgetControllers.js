const Budget = require('../models/budget');
const Expense = require('../models/expense');

async function createBudget(req, res) {
  try {
    const {title, budgetAmount} = req.body;
    const budget = await Budget.create({title, budgetAmount});
    res.status(200).json(budget);
  } catch (err) {
    res.status(422).json({err: err.message});
  }
}
/* 
function getBudgetSummary(req, res) {
  const { id } = req.params;
  function aggregateCallback(err, result) {
    if (err) {
      console.log(err);
      return res.status(422).json({err: err.message});
    }
    console.log(result);
    res.status(200).json(result);
  }

  Budget.aggregate([
    { $match: {
      _id: id
    }},
    { $lookup: {
      from: 'expense', localField: 'expense', foreignField: '_id', as: 'expenses'
    }},
    { $group: 
      {
        _id: '$expenses._id',
        total_expenses: { $sum: '$expenses.amount'}
      }
    }
  ], aggregateCallback);
}
*/
module.exports = {
  createBudget,
  // getBudgetSummary
}