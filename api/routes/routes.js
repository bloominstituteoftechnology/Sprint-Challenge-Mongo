const { createBudget } = require('../controllers/budgetControllers');
const {
  createCategory,
  getCategories,
} = require('../controllers/categoryControllers');
const expenseController = require('../controllers/expenseControllers');

module.exports = app => {
  app.post('/budget', (req, res) => {
    const { title, budgetAmount } = req.body;

    createBudget({ title, budgetAmount })
      .then(savedBudget => res.status(200).send(savedBudget))
      .catch(err => res.status(500).send(err));
  });

  app.post('/category', (req, res) => {
    const { title } = req.body;

    createCategory({ title })
      .then(savedCategory => res.status(200).send(savedCategory))
      .catch(err => res.status(500).send(err));
  });

  app.get('/category', (req, res) => {
    getCategories()
      .then(allCategories =>
        res.status(200).send(allCategories.map(category => category.title)),
      )
      .catch(err => res.status(500).send(err));
  });
};
