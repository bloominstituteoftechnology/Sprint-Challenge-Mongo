const budgetCreate = require('../controllers/budgetControllers.js');

module.exports = (app) => {
	app.post('/budget', (req, res) => {
		budgetCreate(req.params);
	});
	app.post('/category', (req, res) => {
		categoryCreate(req.params);
	});
	app.get('/category', (req, res) => {
		categoryGetter();
	});
	app.post('/expense', (req, res) => {
		expenseCreate(req.params);
	});
	app.get('/expense', (req, res) => {
		expenseGetter(req.params);
	});
};