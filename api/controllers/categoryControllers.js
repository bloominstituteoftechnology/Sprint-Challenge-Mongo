const mongoose = require('mongoose');

const Category = require('../models/Category');

const STATUS_USER_ERROR = 422;

const categoryCreate = (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({ title });
  newCategory.save()
    .then((createdCategory) => {
      res.json(createdCategory);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR).json({ errorMessage: err.message });
      return;
    });
};

const categoryList = (req, res) => {
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
  categoryCreate,
  categoryList,
};