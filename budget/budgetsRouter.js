const express = require("express");
const Budget = require("./Budget");
const router = express.Router();

router.route("/").post((req, res) => {
  const { title, budgetAmount } = req.body;
  if (!title || !budgetAmount) {
    res
      .status(400)
      .json({ error: "Please provide a title and budget amount." });
  } else {
    const newBudget = new Budget({ title, budgetAmount });
    newBudget
      .save()
      .then(budget => res.status(201).json(budget))
      .catch(err => res.status(500).json({ error: err.message }));
  }
});

module.exports = router;
