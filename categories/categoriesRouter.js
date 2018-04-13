const express = require('express');
const categoriesRouter = express.Router();

const Category = require('./categoriesModel');

categoriesRouter.post('/new', (request, response) => {
  const categoryInfo = request.body;
  const newCategory = new Category(categoryInfo);

  newCategory
    .save()
    .then(savedCategory => response.status(201).send(savedCategory))
    .catch(err => response.status(500).send(`There was a problem saving the new category: ${err}`));
});

categoriesRouter.get('/all', (request, response) => {
  Category
    .find({}) //Empty filter object finds all documents in Category.
    .then(allCategories => response.status(200).send(allCategories))
    .catch(err => response.status(500).send(`There was a problem retrieving the expenditure categories: ${err}`));
});

module.exports = categoriesRouter;