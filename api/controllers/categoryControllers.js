const Category = require('../models/category');

async function createCategory(req, res) {
  try {
    const title = req.body.title;
    const category = await Category.create({title});
    res.status(200).json(category);
  } catch (err) {
    res.status(422).json({err: err.message});
  }
}

async function getCategories(req, res) {
  try {
    res.status(200).json(await Category.find().select('title'));
  } catch (err) {
    res.status(422).json({err: err.message});
  }
}

module.exports = {
  createCategory,
  getCategories
}