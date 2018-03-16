const express = require("express");
const Budget = require("./budgetModel.js");

const budgetRouter = express.Router();

budgetRouter.post("/", (req, res) => {
  const budgetInfo = req.body;
  const newBudget = new Budget(budgetInfo);

  newBudget
    .save()
    .then(savedBudget => {
      res.status(200).json(savedBudget);
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not save budget",
      });
    });
});

module.exports = budgetRouter;
