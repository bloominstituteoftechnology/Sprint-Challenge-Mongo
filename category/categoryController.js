const express = require("express");
const router = express.Router();

const Category = require("./categoryModel.js");

router
  .route("/")
  .get((req, res) => {
    Category.find({})
      .populate("budget category")
      .then(categories => {
        res.json(categories);
      });
  })
  .post((req, res) => {
    const category = new Category(req.body);

    category.save().then(savedCategory => {
      res.json(savedCategory);
    });
  });

module.exports = router;
