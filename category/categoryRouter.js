const express = require("express");
const router = express.Router();

const Category = require("./Category");

router
	.route("/")
	.get(get)
	.post(post);

function get(req, res) {
	const query = Category.find().select({ title: 1, _id: 0 });

	query
		.then(categories => {
			res.status(200).json(categories);
		})
		.catch(err => {
			res.status(500).json({ errorMessage: "Categories can not be retrieved" });
		});
}

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

module.exports = router;
