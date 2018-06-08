const express = require("express");
const router = require("express").Router();
const Budget = require("./Budget");

router.route("/").post((req, res) => {
  const { title, budgetAmount } = req.body;
  const budgetItem = { title, budgetAmount };
  // const budget = new Budget(budgetItem);
  Budget.create(budgetItem)
    .then(newBudget => {
      res.status(200).json(newBudget);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
