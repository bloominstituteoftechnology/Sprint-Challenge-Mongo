const mongoose = require('mongoose');
const Category = require('../models/category');
const statusCodes = require('../../common/statusCodes.js');
const { log, catchLog } = require('../../common/console.js');
/* eslint-disable no-console */
const createCategory = (req, res) => {
  const { title } = req.body;
  // console.log('createCategory title', title);
  const newCategory = new Category({ title });
  newCategory.save()
    .then((savedCategory) => {
      res.status(statusCodes.created).json(savedCategory);
    })
    .catch((err) => {
      res.status(statusCodes.userError).json({ error: err.message });
    });
};
const getAllCategories = (req, res) => {
  Category.find()
    .exec()
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(statusCodes.serverError).json({ error: err.message });
    });
};
module.exports = {
  createCategory,
  getAllCategories
}
;