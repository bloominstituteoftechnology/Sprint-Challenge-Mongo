const budgetCreate = require('../controllers/budgetControllers.js');

module.exports = (app) => {
	// Todo: Fill in your routes here
	app.post('/budget', (req, res) => {
		const { title, budgetAmount } = req.params;
		budgetCreate(req.params)
			.then((budget) => {
				res.status(200).json(budget);
			})
			.catch((err) => {
				res.status(500).json({ error: 'No budget for you!' });
			});
	});
};
