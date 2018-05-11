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

// GET /:id
router.route("/:id").get((req, res) => {
  const { id } = req.params;

  Category.findById(id)
    .then(category => {
      res.status(200).json(category);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting the specified category."
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

// PUT /:id
router.route("/:id").put((req, res) => {
  const { id } = req.params;
  const update = req.body;

  Category.findByIdAndUpdate(id, update)
    .then(category => {
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({
          error: "Category not found!"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error updating the category."
      });
    });
});

// DELETE /:id
router.route("/:id").delete((req, res) => {
  const { id } = req.params;

  Category.findByIdAndRemove(id)
    .then(category => {
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({
          error: "Category not found!"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error deleting the category."
      });
    });
});

module.exports = router;
