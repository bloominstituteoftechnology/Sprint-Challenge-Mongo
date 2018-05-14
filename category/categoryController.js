const express = require("express");

const Category = require("./categoryModel");

const router = express.Router();

router.get("/", (req, res) => {
  let query = Category.find().select("title"); // selector

  query
    .then(category => {
      res.status(200).json(category);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const categoryInput = req.body;
  const category = new Category(categoryInput);

  category
    .save()
    .then(newCategory => {
      res.status(201).json(newCategory);
    })
    .catch(err => {
      if (category.title === undefined) {
        res.status(400).json({
          errorMessage: "Please provide 'title' for your category."
        });
      } else {
        res
          .status(500)
          .json("Something went wrong while saving the category.", err);
      }
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Category.findByIdAndRemove(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const categoryEdit = req.body;
  Category.findByIdAndUpdate(id, categoryEdit)
    .then(response => {
      if (response === null) {
        res.status(404).json({ message: "Category info not found (Edit)" });
      } else {
        res.status(200).json(response);
      }
    })
    .catch(err => {
      if (err.name === "CastError") {
        res.status(400).json({
          message: "invalid ID, check and try again."
        });
      }
      res.status(500).json(err);
    });
});

module.exports = router;
