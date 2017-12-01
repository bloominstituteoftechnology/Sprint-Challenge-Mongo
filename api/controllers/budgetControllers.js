const Budget = require('../models/budget');

const budgetCreate = (req, res) => {
  const { title, budgetAmmount } = req.body;
  const newBudget = Budget({ title, budgetAmmount });

  newBudget
    .save()
    .then(nBudget => res.status(201).json(nBudget))
    .catch(err => res.status(500).json(err));
};

module.exports = { budgetCreate };
