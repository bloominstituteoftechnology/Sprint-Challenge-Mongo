const budgetController = require('../controllers/budgetControllers');

module.exports = app => {
  app.post('/budget', (req, res) => {
    const { title, budgetAmount } = req.body;

    budgetController({ title, budgetAmount })
      .then(savedBudget => res.status(200).send(savedBudget))
      .catch(err => res.status(500).send(err));
  });
};
