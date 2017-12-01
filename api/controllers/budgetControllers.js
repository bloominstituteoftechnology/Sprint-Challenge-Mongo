const Budget = require('../models/budget');
const Expense = require('../models/expense');

const budgetCreate = (req, res) => {
  const { title, budgetAmmount } = req.body;
  const newBudget = Budget({ title, budgetAmmount });

  newBudget
    .save()
    .then(nBudget => res.status(201).json(nBudget))
    .catch(err => res.status(500).json(err));
};

const budgetSummary = (req, res) => {
  const { id } = req.params;

  Budget
    .findById(id)
    .then((testB) => {
      Expense
        .aggregate([
          { $group: { _id: '$budget', total: { $sum: '$ammount' } } },
        ])
        .exec()
        .then((value) => {
          res.json({ value: testB.budgetAmmount - value[0].total });
        })
        .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
};

module.exports = { budgetCreate, budgetSummary };
