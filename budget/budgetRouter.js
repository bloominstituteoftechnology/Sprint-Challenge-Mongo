const express = require("express");

const Budget = require("./Budget");

const router = express.Router();

// /api/budget

// POST /
router.route("/").post((req, res) => {
  const { title, budgetAmount } = req.params;
  const budget = new Budget(req.body);

  if (title && budgetAmount) {
    budget
      .save()
      .then(budget => {
        res.status(201).json(budget);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error posting the new budget."
        });
      });
  } else {
    res.status(404).json({
      error: "Please provide a TITLE and BUDGETAMOUNT to continue."
    });
  }
});

module.exports = router;
