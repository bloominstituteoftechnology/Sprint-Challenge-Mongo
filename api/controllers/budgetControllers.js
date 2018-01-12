const mongoose = require('mongoose');
const Budget = mongoose.model('Budget');

const budgetCreate = (req, res) => {
  const budget = req.body;
  Budget.post(budget)
    .then((budget) => {
      if (!budget) throw new Error('No budget created');
      res.status(201).json({ message: 'Budget created successfully' });
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};

module.exports = {
  budgetCreate
};