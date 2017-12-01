const Category = require('../models/category');

const SERVER_STATUS_ERROR = 500;
const USER_STATUS_ERROR = 422;

const categoryCreate = (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({ title });
  newCategory
    .save()
    .then(category => {
      if (category === null) {
        res.status(SERVER_STATUS_ERROR).json({ err: err.message });
      }
      res.json(category);
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
};

const categoryList = (req, res) => {
  Category.find({})
    .exec()
    .then(category => {
      if (category === null) {
        res.status(SERVER_STATUS_ERROR).json({ error: err.message });
      }
      res.json(category)
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
};

module.exports = {
  categoryCreate,
  categoryList
};