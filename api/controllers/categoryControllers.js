const mongoose = require('mongoose');

const Category = require('../models/category');

const createCategory = (req, res) => {
  const { title } = req.body;
  const newCategory = Category({ title });
  newCategory
    .save()
    .then((createdCategory) => {
      res.status(201).json(createdCategory);
    })
    .catch((err) => {
      res.status(500);
      res.json({ errorMessage: err.message });
      return;
    });
};

const getAllCategories = (req, res) => {
  Category.find({})
    .select('title')
    .exec()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      res.status(500).json({ err });
      return;
    });
}

module.exports = {
  createCategory,
  getAllCategories
};