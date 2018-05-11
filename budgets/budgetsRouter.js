const express = require("express");

const Budget = require("./Budget");

const router = express.Router();

router.get("/", (req, res) => {
  Budget.find()
    .then(budgets => {
      res.status(200).json(budgets);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get budgets." });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Budget.findById(id)
    .then(budget => {
      res.status(200).json(budget);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get budget." });
    });
});

router.post("/", (req, res) => {
  const newBudget = new Budget(req.body);
  newBudget
    .save()
    .then(budget => {
      res.status(201).json(budget);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not post budget." });
    });
});

module.exports = router;
