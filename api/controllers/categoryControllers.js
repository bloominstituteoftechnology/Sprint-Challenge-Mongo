const mongoose = require("mongoose");

const Category = require("../models/category");

const STATUS_USER_ERROR = 422;

const newCategory = (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({ title });

  newCategory
    .save()
    .then(createdCategory => {
      res.json(createdCategory);
    })
    .catch(err => {
      res.status(500).json({ err });
      return;
    });
};

const displayAllCategories = (req, res) => {
  Category.find()
    .select("title")
    .exec()
    .then(categories => {
      if (categories.length === null) throw new Error();
      res.json(categories);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

module.exports = {
  newCategory,
  displayAllCategories
};
