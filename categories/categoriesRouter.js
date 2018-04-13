const express = require('express');
const router = express.Router();

const Category = require('./Category.js');

router.route('/')
  .get(async (req, res) => {
    try {
      let categories = await Category.find({});
      categories = categories.map((category) => {
        return category.title;
      })
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: "The server has failed you" });
    }
  })
  .post(async (req, res) => {
    try {
      const category = new Category(req.body);
      await category.save();
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: "The server has failed you" });
    }
  });

module.exports = router;
