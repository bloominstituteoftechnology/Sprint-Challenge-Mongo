const mongoose = require('mongoose');
const Category = require('../models/category.js');

module.exports = categoryCreate = (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({ title})

  newCategory
    .save()
    .then((createCategory) => {
      res.status(200).json(createCategory)
    })
    .catch((err) => {
      res.status(422).json(err)
    })
}

module.exports = allCategorys = (req, res) => {
  Category.find()
    .then((all) => {
      res.status(200).json(all)
    })
    .catch((err) => {
      res.status(422).json(err)
    })
}