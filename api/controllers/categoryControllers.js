const mongoose = require('mongoose');
const Category = require('../models/category.js');

module.exports.categoryCreate = (req, res) => {
	const category = new Category(req.body);

	category
	  .save()
	  .then((category) => {
	  	res.status(200).json(category);
	  })
	  .catch((error) => {
	  	res.status(500).json({ message: 'Server Error!'}, error);
	  });
}

module.exports.categoryFind = (req, res) => {
	Category
	  .find({}, 'title')
	  .then((categories) => {
	  	res.status(200).json(categories);
	  })
	  .catch((error) => {
	  	res.status(500).json({ message: 'Server Error!'}, error);
	  });
};