const Category = require('../models/category');

const createCategory = categoryInfo => {
  return new Category(categoryInfo).save();
};

const getCategories = _ => {
  return Category.find();
};

module.exports = { createCategory, getCategories };
