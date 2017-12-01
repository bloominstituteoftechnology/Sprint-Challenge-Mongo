const Category = require('../models/category');

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

const categoryCreate = (req, res) => {
    const { title, } = req.body
    const newCategory = new Category({ title,});
    newCategory
      .save()
      .then((category) => {
          res.json(category)
      })
      .catch((err) => {
          res.status(STATUS_USER_ERROR).json(err)
          return;
      });
};

const allCategoriesGet = (req, res) => {
    Category
      .find({})
      .then((categories) => {
          res.json(categories)
      })
      .catch((err) => {
          res.status(STATUS_SERVER_ERROR).json(err)
          return;
      });
};

module.exports = {
    categoryCreate,
    allCategoriesGet
};