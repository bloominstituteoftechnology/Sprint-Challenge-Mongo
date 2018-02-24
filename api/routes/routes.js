const budgetCreate = require('../controllers/budgetControllers.js');

module.exports = (app) => {
	// Todo: Fill in your routes here
	app.post('/budget', (req, res) => {
		budgetCreate(req.params);
		// create a budget
	});
	app.post('/category', (req, res) => {
		categoryCreate(req.params);
		// create a category
	});
	app.get('/category', (req, res) => {
		categoryGetter();
		// get a list of categories
	});
	app.post('/expense', (req, res) => {
		expenseCreate(req.params);
		// create an expense item
	});
	app.get('/expense', (req, res) => {
		expenseGetter(req.params);
		// get a list of expenses
	});
};

// call functions in Controllers from here
// export
