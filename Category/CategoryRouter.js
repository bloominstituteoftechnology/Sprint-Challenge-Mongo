const express = require('express');

const Category = require('./CategoryModel.js');
const CategoryRouter = express.Router();

CategoryRouter.post('/', (req, res) => {
		const CategoryInfo = req.body;
		const category = new Budget(CategoryInfo);

		category
		  .save()
			.then(savedCategory) => {
			   res.status(201).json(savedCategory);
			})
      .catch(err => {
					res.status(500).json({
              error: "There was an error while saving the Category to the Database"
				  });
			});
 CategoryRouter.get('/', (req, res) => {
		 Category.find({})
		   .then(category => {
					 res.status(200).json(category);
				})
			 .catch(err => {
					 res.status(500).json({
                error: "The Category information could not be retrieved"
						  });
				 });
     });

module.exports = CategoryRouter;
