const { createBudget, getBudget } = require('../controllers/budgetControllers');
const {
  createCategory,
  getCategories,
  populateCategoryBy,
} = require('../controllers/categoryControllers');
const {
  createExpense,
  getExpenses,
  aggregateExpenses,
  getExpensesOf,
  aggregateExpensesBy,
} = require('../controllers/expenseControllers');

module.exports = app => {
  app.post('/budget', (req, res) => {
    createBudget(req.body)
      .then(savedBudget => res.status(200).json(savedBudget))
      .catch(err => res.status(500).json(err));
  });

  app.get('/budget/:id/summary', (req, res) => {
    const budgetId = req.params.id;

    Promise.all([
      aggregateExpenses().then(allExpenses =>
        Promise.resolve(
          allExpenses.filter(expense => expense._id.toString() === budgetId)[0]
            .expensesSum,
        ).catch(err => Promise.reject(err)),
      ),
      getBudget(budgetId)
        .then(budgetObj => Promise.resolve(budgetObj.budgetAmount))
        .catch(err => Promise.reject(err)),
      getExpensesOf(budgetId).then(expensesList =>
        Promise.resolve(expensesList).catch(err => Promise.reject(err)),
      ),
    ])
      .then(values => {
        const budgetExpenses = values[0];
        const budgetAmount = values[1];
        const expensesList = values[2].map(expense => {
          return { amount: expense.amount, description: expense.description };
        });

        res.status(200).json({
          budgetSummary: budgetAmount - budgetExpenses,
          budgetAmount,
          budgetExpenses,
          expensesList,
        });
      })
      .catch(err => res.status(500).json(err));
  });

  app.post('/category', (req, res) => {
    createCategory(req.body)
      .then(savedCategory => res.status(200).json(savedCategory))
      .catch(err => res.status(500).json(err));
  });

  app.get('/category', (req, res) => {
    getCategories()
      .then(allCategories =>
        res.status(200).json(allCategories.map(category => category.title)),
      )
      .catch(err => res.status(500).json(err));
  });

  app.post('/expense', (req, res) => {
    createExpense(req.body)
      .then(createdExpense => res.status(200).json(createdExpense))
      .catch(err => res.status(500).json(err));
  });

  app.get('/expense', (req, res) => {
    getExpenses()
      .then(allExpenses => res.status(200).json(allExpenses))
      .catch(err => res.status(500).json(err));
  });

  app.get('/expenses', (req, res) => {
    const prop = req.query.aggregatedBy;

    aggregateExpensesBy(prop)
      .then(allExpenses => {
        populateCategoryBy(allExpenses)
          .then(categoryTitles =>
            res.json(
              allExpenses.map(expenses => {
                const categoryTitle = categoryTitles.find(
                  title => title._id.toString() === expenses._id.toString(),
                ).title;

                return { categoryTitle, ...expenses };
              }),
            ),
          )
          .catch(err => res.json(err));
      })
      .catch(err => res.status(500).json(err));
    return;
  });
};
