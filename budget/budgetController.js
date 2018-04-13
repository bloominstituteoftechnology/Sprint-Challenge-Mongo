const router = require("express").Router();

const Budget = require("./budgetModel");

router.route("/").post((req, res) => {
  const budget = new Budget(req.body);

  budget
    .save()
    .then(savedBudget => {
      res.status(201).json(savedBudget);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
