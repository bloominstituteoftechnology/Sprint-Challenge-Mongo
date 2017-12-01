const mongoose = require('mongoose');

const Category = require('../models/category');

const getCategoryTitle = (req, res) => {};

const createCategory = (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({ title });
  newCategory.save((err, category) => {
    if (err) {
      res.status(422).json(err);
    }
    res.json(category);
  });
};

module.exports = {
  createCategory,
  getCategoryTitle,
};
