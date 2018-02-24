const { createBudget } = require('../controllers/budgetControllers');
const { createCategory, getCategories } = require('../controllers/categoryControllers');
const { createExpense, getExpenses, aggregateExpenses, getExpensesOf } = require('../controllers/expenseControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  app.post('/budget', (req, res) => {
  	createBudget(req.body)
  		.then(budget => {
  			res.status(200).json(budget);
  		})
  		.catch(error => {
  			res.status(500).json(error);
  		});
  });

  app.post('/category', (req, res) => {
  	createCategory(req.body)
  		.then(category => {
  			res.status(200).json(category);
  		})
  		.catch(error => {
  			res.status(500).json(error);
  		});
  });

  app.get('/category', (req, res) => {
  	getCategories()
  		.then(categories => {
  			res.status(200).json(categories);
  		})
  		.catch(error => {
  			res.status(500).json(error);
  		});
  });

  app.post('/expense', (req, res) => {
  	createExpense(req.body)
  		.then(expense => {
  			res.status(200).json(expense);
  		})
  		.catch(error => {
  			res.status(500).json(error);
  		});
  });

  app.get('/expense', (req, res) => {
  	getExpenses()
  		.then(expenses => {
  			res.status(200).json(expenses);
  		})
  		.catch(error => {
  			res.status(500).json(error);
  		});
  });
};
