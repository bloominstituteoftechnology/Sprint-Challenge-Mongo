const mongoose = require('mongoose');
const Category = require('../models/category');

// const categoryCreate = (req, res) => {
//   const category = req.body;
//   const newCategory = new Category(category);
//   newCategory.save()
//     .then((category) => {
//       if (!category) throw new Error('No category created');
//       res.status(201).json({ message: 'Category created successfully' });
//     })
//     .catch((error) => {
//       res.status(422).json({ error: error.message });
//     });
// };

// async and await
const categoryCreate = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();
    if (!savedCategory) throw new Error('No category created');
    res.status(201).json({ message: 'Category created successfully' });
  }
  catch(error) {
    res.status(422).json({ error: error.message });
  }
};

// const categoryList = (req, res) => {
//   Category.find({})
//     .select({ "title": 1, "_id": 0})
//     .then((categories) => {
//       if (categories.length === 0) throw new Error('Categories retrieved failed');
//       res.status(200).json(categories);
//     })
//     .catch((error) => {
//       res.status(422).json({ error: error.message });
//     });
// };

// async and await
const categoryList = async (req, res) => {
  try {
    const foundCategories = await Category.find({}).select({ "title": 1, "_id": 0});
    if (foundCategories.length === 0) throw new Error('Categories retrieved failed');
    res.status(200).json(foundCategories);
  }
  catch(error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = {
  categoryCreate,
  categoryList
};