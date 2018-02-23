const mongoose = require('mongoose');

const Category = require('../models/category');

const categoryCreate = (req, res) => {
  const { title } = req.body;
  
  if (!title) {
    res.status(500).json({ error: "A title must be provided to create a category" });
  } else {
    Category.create(title)
      .save()
      .then(category => {
        res.status(200).json(category);
      }).catch(error => {
        res.status(500).json({ error: "Failed to create a new category" });
      })
  }
}

const getCategories = (req, res) => {
  Category.find({})
    .populate('categories', 'title')
    .then(categories => {
      res.status(200).json(categories);
    }).catch(error => {
      res.status(500).json({ error: "Failed to get categories" });
    })
}

module.exports = categoryCreate, getCategories;