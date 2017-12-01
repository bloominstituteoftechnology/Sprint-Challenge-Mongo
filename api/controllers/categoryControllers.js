const mongoose = require('mongoose');

const Category = require('../models/category');
const STATUS_USER_ERROR = 422;

const makeCategory = (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({ title });
  newCategory.save(newCategory, (err, category) => {
    if (err) {
      res.status(500).json({ '!E': err });
    }
    res.json({ 'New category': category });
  });
};

const returnCategories = (req, res) => {
  Category.find({})
    .select('title')
    .exec()
    .then(categories => {
      if (categories.length === 0 || categories === null) {
        throw new Error();
      }
      res.json(categories);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ '!E': err });
    });
};

module.exports = {
  makeCategory,
  returnCategories
};
