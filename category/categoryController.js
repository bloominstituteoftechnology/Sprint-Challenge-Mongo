const express = require("express");

const Category = require("./categoryModel");

const router = express.Router();

// router.get("/", (req, res) => {
//   let query = Category.find();
// });

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