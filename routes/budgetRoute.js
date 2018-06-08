const router = require('express').Router();

const Budget = require('../database/Budget');

router
  .get('/', (req, res) => {
    Budget.find()
      .exec((err, raw) => {
        if (err)
          return res.status(500).json(err);

        res.json(raw);
      });
  })

  .post('/', (req, res) => {
    const { title, budgetAmount } = req.body;
    const budget = { title, budgetAmount };
    
    Budget.create(budget, (err, raw) => {
      if (err)
        return res.status(500).json(err);

      res.json(raw);
    });
  });

module.exports = router;