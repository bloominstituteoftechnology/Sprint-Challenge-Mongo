const express = require('express');
const Budget = require('./budgetModel');
const router = express.Router();

router.route('/')
  .get((req, res) => res.send("Budget router is functional."))
  // .get((req, res) => {
  //   Budget
  //     .find()
  //     .then(budgets => res.status(200).json(budgets))
  //     .catch(err => res.status(500).json({ error: "There was an error fetching your budgets." }))
  // })

  .post((req, res) => {
    const { title, budget } = req.body;
    if (!title || title === "") { res.status(400).json({ error: "Title is required." }) }
    if (!budget || budget <= 0) { res.status(400).json({ error: "Budget is required. Value must be a number greater than zero." }) }

    const newBudget = new Budget(req.body);
    newBudget
      .save()
      .then(savedBudget => res.status(201).json(savedBudget))
      .catch(err => res.status(500).json({ error: "A problem was encountered while saving this budget." }))
  })

module.exports = router;