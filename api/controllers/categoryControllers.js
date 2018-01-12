const mongoose = require('mongoose');

const Category = require('../models/category');

const createCategory = (req, res) => {
  const category = new Category(req.body);

  category
    .save()
    .then(newCategory => {
      res.status(201).json(newCategory);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error createing category', err });
    });
};

const getCategories = (req, res) => {
  Category.find({})
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error getting categories', err });
    });
};

module.exports = {
  createCategory,
  getCategories
};
