const mongoose = require('mongoose');

const Category = require('../models/category');

const STATUS_USER_ERROR = 422;

const createCategory = (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({ title });
  newCategory.save((err, createdCategory) => {
    if (err) {
      res.status(STATUS_USER_ERROR);
      res.json(err);
      return;
    }
    res.json(createdCategory);
  });
};

const listCategories = (req, res) => {
  Category.find({}, { title: 1 })
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json(err);
      return;
    });
};

module.exports = {
  createCategory,
  listCategories,
};
