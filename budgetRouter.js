const express = require('express');
const router = express.Router();
const Budget = require('./models/Budget.js');


router
  .get('/', (req, res) => {
    Budget
      .find()
      .then(response => {
        res.send(response)
      })
      .catch(error => res.send(error));
  })
  .post('/', (req, res) => {
    const { title, budgetAmount } = req.body;
    // filling the budget form
    const newBudget = new Budget({ title, budgetAmount});
    
    newBudget
      .save()
      .then(response => {
        res.send(response)
      })
      .catch(error => res.send(error));
  })
  .delete('/:id', (req, res) => {
    const { id } = req.params;
    Budget
     .remove({_id: id})
     .then(response => {
      res.send(response)
    })
    .catch(error => res.send(error));
  })

module.exports = router;