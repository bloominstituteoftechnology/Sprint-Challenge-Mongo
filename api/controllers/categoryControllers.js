const mongoose = require('mongoose');
const Category = mongoose.model('Category');

const categoryCreate = (req, res) => {
  const category = req.body;
  Category.post(category)
    .then((category) => {
      if (!category) throw new Error('No category created');
      res.status(201).json({ message: 'Category created successfully' });
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};

const categoryList = (req, res) => {
  Category.find({})
    .select('title')
    .then((categories) => {
      if (categories.length === 0) throw new Error('Categories retrieved failed');
      res.status(200).json(categories);
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};

module.exports = {
  categoryCreate,
  categoryList
};