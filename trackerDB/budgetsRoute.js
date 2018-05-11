const express = require("express");
const router = express.Router();
const Budget = require("./budgetsModel.js");

router.get("/", (req, res) => {
  Budget.find()
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ msg: "we cant display budgets " });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Budget.findById(id)
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ msg: "we cant display budgets " });
    });
});

router.post("/", (req, res) => {
  const obj = req.body;
  newBudget = new Budget(obj);
  newBudget
    .save()
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ msg: "we cant display budgets " });
    });
});

module.exports = router;
