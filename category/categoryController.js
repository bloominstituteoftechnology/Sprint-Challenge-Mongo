const express = require('express');
const Category = require('./categoryModel');
const Budget = require('../budget/budgetModel');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    Category
    .find({}, { title: 1, _id: 1 }) // find all existing categories and return them with only their title
    .populate('budget', 'title') // populate 'budget' and only show 'title'
    .then(categories => res.status(200).json(categories))
    .catch(err => res.status(500).json({ error: "Cannot fetch any categories at this time." }))
  })
  
  .post((req, res) => {
    const { title, budget } = req.body; // pass ObjectId from existing budget as a string
    if (!title || title === "") { res.status(400).send("A title is required to create a category.") }
  
    Category
      .create(req.body) // returns a promise
      .then(savedCategory => res.status(201).json(savedCategory))
      .catch(err => res.status(500).json({ error: "There was an issue saving your category." }))
  })

router.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    Category
      .findById(id)
      .populate('budget', 'title')
      .then(cat => res.send(cat))
      .catch(err => res.send("Error."))
  })

  .delete((req, res) => {
    const { id } = req.params;
    Category
      .findByIdAndRemove(id)
      .then(removed => res.status(200).json(removed))
      .catch(err => res.status(500).json({ error: "Please verify that the provided ID is accurate." }))
  })

  .put((req, res) => {
    const { id } = req.params;
    const updates = req.body; // should only need to pass the field(s) that you're updating
    Category
      .findByIdAndUpdate(id, updates, { new: true })
      .populate('budget', 'title')
      .then(updated => res.status(200).json(updated))
      .catch(err => res.status(500).json({ error: "Cannot update this category. Verify the provided ID." }))    
  })


module.exports = router;



















  // .get((req, res) => {
  //   const { id } = req.params;
  //   const corrBudget = Budget.findById(id).select('title');
    
  //   Category
  //     .findById(id)
  //     .populate( 'budget', `${corrBudget}` )
  //     .then(cat => res.send(cat))
  //     .catch(err => res.send("Error"))

  // })
