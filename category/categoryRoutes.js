const express = require('express');
const Category = require('./categoryModel');
const categoryRouter = express.Router();

categoryRouter.post('/', function(req, res){
	const category = new Category(req.body);
	category.save().then(savedCategory => {
		res.json(savedCategory);
	});
});

categoryRouter.get('/', function(req, res){
	Category.find()
	.select('title')
	.then(categories => {
		res.json(categories);
	});
});

module.exports = categoryRouter;