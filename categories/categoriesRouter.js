const express = require("express");

const Category = require("./Category");

const router = express.Router();

router.get("/", (req, res) => {
  Category.find()
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get categories." });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Category.findById(id)
    .then(category => {
      res.status(200).json(category);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get category." });
    });
});

router.post("/", (req, res) => {
  const newCategory = new Category(req.body);
  newCategory
    .save()
    .then(category => {
      res.status(201).json(category);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not post category." });
    });
});

module.exports = router;
