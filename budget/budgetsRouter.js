const express = require("express");
const router = require("express").Router();
const Budget = require("./Budget");

router.route("/").post((req, res) => {
  const budget = new Budget(req.body);
  budget
    .save()
    .then(newBudget => {
      res.status(201).json(newBudget);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
