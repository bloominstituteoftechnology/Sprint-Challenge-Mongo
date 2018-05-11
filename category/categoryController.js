const express = require("express");

const Category = require("./categoryModel");

const router = express.Router();

router.get("/", (req, res) => {
  let query = Category.find()
  .select("title"); // selector

  query
    .then(category => {
      res.status(200).json(category);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const categoryInput = req.body;
  const category = new Category(categoryInput);

  category
    .save()
    .then(newCategory => {
      res.status(201).json(newCategory);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;