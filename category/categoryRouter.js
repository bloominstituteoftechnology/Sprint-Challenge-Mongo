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

module.exports = router;