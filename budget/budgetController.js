
const express = require("express");
const router = express.Router();

const Budget = require("./budgetModel.js");

router
  .route("/")
  .post((req, res) => {
    if (req.body.title && req.body.budgetAmount) {
      const budget = new Budget(req.body);
      budget
        .save()
        .then(item => {
          console.log("Budget Added To Database")
          res.status(201).json(item);
        })
        .catch(err => {
          console.log(err)
          res.json({ message: "There was an error saving the budget." + err});
        });
    } else {
      res.status(400).json({
        message: "Please include a title and a budget amount in your post."
      });
    }
  })
  .get((req, res) => {
    Budget.find({})
      .then(item => {
        console.log("Fetching Budgets")
        res.json(item);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was an error getting the budgets from the server."});
      });
  });

module.exports = router;