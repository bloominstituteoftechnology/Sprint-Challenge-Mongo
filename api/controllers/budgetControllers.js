const Budget = require('../models/budget.js');

const createBudget = (req, res) => {
  const { title, budgetAmount } = req.body;
  const newBudget = new Budget({ title, budgetAmount });

  newBudget.save(newBudget, (err, budget) => {
    if (err) {
      res.status(422);
      res.json({ err: 'Error setting up budget' });
      return;
    }
    res.json(budget);
  });
};

module.exports = {
  createBudget,
}