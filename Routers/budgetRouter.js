const express = require('express');

const Budget = require('../Models/budgetModel');

const router = express.Router();

router.post('/', (req, res) => {
  const bud = new Budget(req.body);

  bud.save()
    .then(bud => {
      res.status(200).send(bud);
    })
    .catch(err => {
      res.status(400).send({ msg: 'There was an error saving that budget', error: err });
    });
});

module.exports = router;