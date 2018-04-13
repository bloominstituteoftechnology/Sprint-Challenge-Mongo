const router = require('express').Router();

const Category = require('./CategoryModel.js');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({}).select({ _id: 0, title: 1 });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
