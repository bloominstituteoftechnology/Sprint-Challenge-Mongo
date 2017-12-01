const Category = require('../models/category.js');

const createCategory = (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({ title });
  
  newCategory.save(newCategory, (err, category) => {
    if (err) {
      res.status(422);
      res.json({ err: 'There was an error creating a category' });
      return;
    }
    res.json(category);
  });
};

const getCategories = (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      res.status(422);
      res.json({ err: 'There was an error locating all the categories, sorry' });
      return;
    }
    res.json(categories);
  });
};

module.exports = {
  createCategory,
  getCategories,
}