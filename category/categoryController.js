const express = require('express');
const CategoryRouter = express.Router();
const Category = require('./CategoryModel');

CategoryRouter.post('/', (req,res) => {
  const CategoryInfo = req.body;
  const newCategory = new Category(CategoryInfo);
  newCategory
    .save()
    .then(savedCategory => {
      res.status(200).json(savedCategory);
    })
    .catch(err => {
      res.status(500).json({error: 'There was an error saving your category to the database'})
    })
})

CategoryRouter.get('/', (req,res) => {
  Category.find({})
    .select('title')
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(err => {
      res.status(500).json({error: 'There was an error retrieving your categories from the database'})
    })
});

module.exports = CategoryRouter;