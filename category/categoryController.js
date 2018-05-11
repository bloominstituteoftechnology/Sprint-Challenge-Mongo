const express = require("express");
const router = express.Router();

const Category = require("./categoryModel.js");

router
  .route("/")
  .get((req, res) => {
    Category.find({})
      .select({ title: 1, _id: 0 })

      .then(categories => {
        res.json(categories);
      })
      .catch(err => {
        res.status(500).json({
          message: "Get Server Error."
        });
      });
  })
  .post((req, res) => {
    if (req.body.title) {
      const category = new Category(req.body);

      category
        .save()
        .then(savedCategory => {
          res.json(savedCategory);
        })
        .catch(err => {
          res.status(500).json({
            message: "Post Server Error."
          });
        });
    } else {
      res
        .status(400)
        .json({ message: "Error: Please provide a category Title." });
    }
  });

module.exports = router;