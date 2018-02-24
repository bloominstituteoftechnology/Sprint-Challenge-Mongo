const routes = require('../routes/routes');

// create a collection of categories
function budgetCreateCollection(params) {
	const { title } = params;
	db
		.createCollection('categories')
		.then((collection) => {
			res.status(200).json(collection);
		})
		.catch((err) => {
			res.status(500).json({ error: 'No categories for you!' });
		});
}

// create categories
function budgetCreate(params) {
	// if no collection, run createCollection
	const { title, budgetAmount } = params;
	db.categorys
		.insertOne('category')
		.then((category) => {
			res.status(200).json(category);
		})
		.catch((err) => {
			res.status(500).json({ error: 'No category for you!' });
		});
}

// get categories
// use .find

// export
// handle promises here
// called from /routes/routes.js
// connect /models/budget.js
