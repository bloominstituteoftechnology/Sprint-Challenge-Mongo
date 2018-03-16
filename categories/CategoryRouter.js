const express = require('express');

const Category = require('./CategoryModel.js');

const CategoryRouter = express.Router();

//req.body is undefined again...
//No idea what I'm doing differently
//Just going to use req.query instead
CategoryRouter.post('/', (req, res) => {
  const categoryInfo = req.query;
  const newCategory = new Category(categoryInfo);

  newCategory
    .save()
    .then(category => {
      res.status(201).json({ Category: category });
    })
    .catch(error => {
      res.status(500).json({ Error: error });
    });
});

// Not sure I understand "Filter out any unuseful information here"
// Seeing as categories are only titles
// Going to try and do what I think that means...
CategoryRouter.get('/', (req, res) => {
  Category.find({})
    //Can't seem to find any documentation on .select
    //Not sure how to not return the _id as well
    .select('title')
    .then(categories => res.status(200).json({ Categories: categories }))
    .catch(error => res.status(500).json({ Error: error }));
});
module.exports = CategoryRouter;
