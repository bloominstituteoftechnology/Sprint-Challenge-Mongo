const express = require('express');

const router = express.Router

router.get('/', (req, res) => {
  Budget.find().then(budgets => {
    res.status(200).json(budgets);
  })
  .catch(error => {
    res.status(500).json({error: "Budget data could not be retrieved"})
  })
})

router.post('/', (req, res) => {
  const budget = new Budget(req.body);
  budget
    .save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: "Data could not be sent "})
    });
})

module.exports = router;