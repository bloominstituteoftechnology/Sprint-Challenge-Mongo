const mongoose = require('mongoose');
const Category = require('../models/category');

const createCategory = (req, res) => {
  const categoryInfo = req.body;
  const { title } = req.body;
  const category = new Category(categoryInfo);

  if (!title) {
    res.status(500).json({error: 'You must provide a title for your category.'});
  } else {
    category.save()
      .then(addedCategory => {
        res.status(200).json(addedCategory);
      })
      .catch(error => {
        res.status(500).json({error: 'Server error while saving category'});
      })
  }
};

const categories = (req, res) => {
  Category.find()
    .select('title')
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(error => {
      res.status(500).json({error: 'There was a problem fetching all categories.'});
    })
};


module.exports = {
  createCategory,
  categories
};