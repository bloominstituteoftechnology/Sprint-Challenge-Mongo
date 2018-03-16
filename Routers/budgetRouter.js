const express = require('express');

const Budget = require('../Models/budgetModel');

const router = express.Router();

router.post('/', (req, res) => {
  const bud = new Budget(req.body);

  bud.save()
    .then(res => {
      res.status(200).send(res);
    })
    .catch(err => {
      res.status(400).send('There was an error saving that budget');
    });
});

module.exports = router;