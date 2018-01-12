const mongoose = require('mongoose');
const Category = require('../models/category');

const createCategory = (newCategory) => {

  return new Category(newCategory).save();

};

const getCategories = () => {

  return Category.find({});

};

module.exports = {
  createCategory,
  getCategories
};