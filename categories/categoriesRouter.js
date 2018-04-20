const express = require("express");

//schema
const Category = require("./Category.js");

const router = express.Router();

//endpoints
router.get("/", (req, res) => {
  Category.find({})
    .select("title")
       .populate('budget')
       .populate('expense')
    .then(budgets => res.status(200).json(budgets))
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post("/", (req, res) => {
  const category = req.body;
  Category.create(category)
    .then(category => res.status(201).json("Saved category successfully"))
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
