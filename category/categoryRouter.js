const express = require("express");
const Category = require("./categoryModel.js");

const categoryRouter = express.Router();

categoryRouter.post("/", (req, res) => {
  const categoryInfo = req.body;
  const newCategory = new Category(categoryInfo);

  newCategory
    .save()
    .then(savedCategory => {
      res.status(200).json(savedCategory);
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not save Category.",
      });
    });
});

categoryRouter.get("/", (req, res) => {
  Category.find({})
    .select("title")
    .then(categories => {
      res.status(200).json({ Categories: categories });
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not retrieve the categories",
      });
    });
});

module.exports = categoryRouter;
