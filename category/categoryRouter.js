const express = require("express");

const Category = require("./Category");

const router = express.Router();

// /api/categories

// GET / ; only list title
router.route("/").get((req, res) => {
  Category.find({})
    .select({ title: 1, _id: 0 })
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting categories."
      });
    });
});

// POST /
router.route("/").post((req, res) => {
  const { title } = req.body;
  const category = new Category(req.body);

  // Make sure title provided
  if (title) {
    category
      .save()
      .then(category => {
        res.status(201).json(category);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error posting the new category."
        });
      });
  } else {
    res.status(404).json({
      error: "Please provide a TITLE to continue."
    });
  }
});

module.exports = router;
