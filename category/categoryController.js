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
          message: "There was an error getting the categories from the server."
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
            message: "There was a problem adding a category to the server."
          });
        });
    } else {
      res
        .status(400)
        .json({ message: "Please provide a title for the category." });
    }
  });

module.exports = router;
