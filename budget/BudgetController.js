const mongoose = require("mongoose");
const express = require("express"); // remember to install your npm packages

const Budget = require("./budget");
const router = express.Router();

const createBudget = (req, res) => {
  console.log("creating budget");
  const budget = new Budget(req.body);

  budget
    .save()
    .then(newBudget => {
      res.status(201).json(newBudget);
    })
    .catch(err => {
      res.status(500).json({ message: "Error creating budget", err });
    });
};
router.post("/", createBudget);

module.exports = router;
