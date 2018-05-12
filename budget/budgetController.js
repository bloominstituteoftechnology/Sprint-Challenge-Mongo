const express = require('express');
const Budget = require('./budgetModel');
const Category = require('../category/categoryModel');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    Budget
      .find()
      .then(budgets => res.status(200).json(budgets))
      .catch(err => res.status(500).json({ error: "There was an error fetching your budgets." }))
  })

  .post((req, res) => {
    const { title, budget } = req.body;
    if (!title || title === "") { res.status(400).json({ error: "Title is required." }) }
    if (!budget || budget <= 0) { res.status(400).json({ error: "Budget is required. Value must be a number greater than zero." }) }

    Budget
      .create(req.body)
      .then(savedBudget => res.status(201).json(savedBudget))
      .catch(err => res.status(500).json({ error: "A problem was encountered while saving this budget." }))
  })

router.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    Budget
      .findById(id) // cant populate without any object id's
      .then(budget => {
        Category
          .find({ budget: { _id: id } }, { title: 1, _id: 0 })
          .then(cats => {
            const view = { ...budget._doc, categories: cats };
            res.status(200).json(view);
          }).catch(err => res.send("error locating categories"))
      }).catch(err => res.status(500).json("Cannot find this budget."))
  })

  .delete((req, res) => {
    const { id } = req.params;
    Budget
      .findByIdAndRemove(id)
      .then(removed => res.status(200).json(removed))
      .catch(err => res.status(500).json("Cannot remove this budget. Please check your ID."))
  })

  .put((req, res) => {
    const { id } = req.params;
    const updates = req.body;
    Budget
      .findByIdAndUpdate(id, updates, { new: true })
      .then(updated => res.status(200).json(updated))
      .catch(err => res.status(500).json("Encountered an error while updating."))
  })

module.exports = router;