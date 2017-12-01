const Category = require('../models/category');

// get

const categoryCreate = (req, res) => {
  const { title } = req.body;
  const newCategory = Category({ title });

  newCategory
    .save()
    .then(nCategory => res.status(201).json(nCategory))
    .catch(err => res.status(500).json(err));
};

const categoryGet = (req, res) => {
  Category
    .find({})
    .then((categories) => {
      const retCat = categories.map(category => category.title);
      res.json(retCat);
    })
    .catch(err => res.status(500).json(err));
};

module.exports = { categoryCreate, categoryGet };
