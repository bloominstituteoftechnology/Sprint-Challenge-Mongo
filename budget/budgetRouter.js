const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const budget = req.body;
  budget.save()
    .then(budget => {
      res.status(200).json(budget);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
