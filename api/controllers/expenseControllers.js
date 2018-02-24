const routes = require('../routes/routes');

// create a collection of expenses
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

// create expenses
function budgetCreate(params) {
	// if no collection, run createCollection
	const { title, budgetAmount } = params;
	db.expenses
		.insertOne('expense')
		.then((expense) => {
			// assign to category & budget
			res.status(200).json(expense);
		})
		.catch((err) => {
			res.status(500).json({ error: 'No expense for you!' });
		});
}

// get expenses
// use .find
// export
