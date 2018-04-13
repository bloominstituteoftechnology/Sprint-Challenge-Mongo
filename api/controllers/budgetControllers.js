
const routes = require('../routes/routes');

// create a collection of budgets
function budgetCreateCollection(params) {
	const { title, budgetAmount } = params;
	db
		.createCollection('budgets')
		.then((collection) => {
			res.status(200).json(collection);
		})
		.catch((err) => {
			res.status(500).json({ error: 'No budgets for you!' });
		});
}

// create budgets
function budgetCreate(params) {
	// if no collection, run createCollection
	const { title, budgetAmount } = params;
	db.budgets
		.insertOne('budget')
		.then((budget) => {
			res.status(200).json(budget);
		})
		.catch((err) => {
			res.status(500).json({ error: 'No budget for you!' });
		});
}