const express = require("express");
const router = express.Router();

const Category = require("./Category");

// POST to '/categories'
// you can write a getter 'get' method that simply returns all the categories. Filter out any unuseful information here, meaning we just want the title of the categories.
// create a minimum of 4 categories so that when you create your expenses, you can assign where they go!
// example of categories could be: Food/Dining Gas/Auto Date Nights Mortgage

router
	.route("/")
	.get(get)
	.post(post);

function post(req, res) {
	const newCategory = req.body;

	// validate - category must have a title
	if (!newCategory.title) {
		res.status(400).json({ errorMessage: "Please provide a category title" });
	} else {
		const category = new Category(newCategory);

		category
			.save()
			.then(category => {
				res.status(201).json(category);
			})
			.catch(err => {
				res.status(500).json({
					errorMessage: "There was an error saving the category to the database"
				});
			});
	}
}
