const Category = require('../models/category');

const createCategory = categoryInfo => {
  return new Category(categoryInfo).save();
};

const getCategories = _ => {
  return Category.find();
};

const populateCategoryBy = ids => {
  return Category.find()
    .where('_id')
    .in(ids);
};

module.exports = { createCategory, getCategories, populateCategoryBy };
