const express = require("express");
const router = express.Router();
const Category = require("./category");


router
  .route("/")
  .get((req, res) => {
    Category.find()
      .select('title -_id')
      .then(categories => {
        res.status(200).json(categories);
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  })
  .post((req, res) => {
    const { title } = req.body;
    const newCategory = new Category({ title });
    newCategory
      .save()
      .then(savedCategory => {
        res.status(201).json(savedCategory);
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  });

module.exports = router;
