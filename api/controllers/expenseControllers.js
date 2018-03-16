const routes = require('../routes/routes');

function budgetCreateCollection(params) {
	const { amount, description } = params;
	db
		.createCollection('expenses')
		.then((collection) => {
			res.status(200).json(collection);
		})
		.catch((err) => {
			res.status(500).json({ error: 'No expenses for you!' });
		});
}

function budgetCreate(params) {

	const { title, budgetAmount } = params;
	db.expenses
		.insertOne('expense')
		.then((expense) => {

			res.status(200).json(expense);
		})
		.catch((err) => {
			res.status(500).json({ error: 'No expense for you!' });
		});
}