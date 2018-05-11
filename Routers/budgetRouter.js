const router = require("express").Router();

const Budget = require("../Models/budgetModel.js");

router.post("/", (req, res, next) => {
  const budget = new Budget(req.body);

  budget
    .save()
    .then(newBudget => {
      res.status(201).json(newBudget);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.get("/", (req, res, next) => {
  Category.find({})
    .select("title")
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});
module.exports = router;
