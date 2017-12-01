const mongoose = require('mongoose');

const Category = require('../models/category');

const STATUS_USER_ERROR = 422;

const createCategory = (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({ title });
  newCategory.save((err, createdCategory) => {
    if (err) {
      res.status(STATUS_USER_ERROR).json(err);
      return;
    }
    res.json(createdCategory);
  });
};

const getCategories = (req, res) => {
  Category.find({})
    .select('title')
    .exec()
    .then(categories => {
      if (categories.length === 0) throw new Error();
      res.json(categories);
    })
    .catch(err => res.status(STATUS_USER_ERROR).json(err));
};

module.exports = {
  createCategory,
  getCategories
};