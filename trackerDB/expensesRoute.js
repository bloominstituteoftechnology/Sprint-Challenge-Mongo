const express = require("express");
const router = express.Router();
const Expense = require("./expensesModel.js");

router.get("/", (req, res) => {
  Expense.find()
    .populate("category", "-_id")
    .populate("budget", "-_id")
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ msg: "we cant display expenses " });
    });
});

router.post("/", (req, res) => {
  Expense.create(req.body)

    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ msg: "we cant display expenses " });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Expense.findById(id)
    .populate("category", "-_id")
    .populate("budget", "-_id")
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ msg: "we cant display expenses " });
    });
});

module.exports = router;
