const Budget = require('../models/budget');

const budgetCreate = (req, res) => {
  const { title, budgetAmount } =  req.body;
  const newBudget = new Budget({ title, budgetAmount });
  newBudget.save(newBudget, (err, savedbudget) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(savedbudget);
  })
};

const budgetSummary = (req, res) => {
  const { id } = req.params;

  Budget
    .findById(id)
    .then((testB) => {
      Expense
        .aggregate([
          { $group: { _id: '$budget', total: { $sum: '$amount' } } },
        ])
        .exec()
        .then((value) => {
          res.json({ value: testB.budgetAmmount - value[0].total });
        })
        .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
};

module.exports = {
  budgetCreate,
  budgetSummary
};