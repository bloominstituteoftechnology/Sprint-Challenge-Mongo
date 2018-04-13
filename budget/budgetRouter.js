const express = require("express");
const Budget = require("./Budget.js");
const router = express.Router();

router.post("/", (req, res) => {
  const budget = new Budget(req.body);
  budget
    .save()
    .then(savedBudget => {
      res.status(201).json(savedBudget);
    })
    .catch(err => {
      res.json({ err: "post at budgetRouter failure.." });
    });
});

module.exports = router;
