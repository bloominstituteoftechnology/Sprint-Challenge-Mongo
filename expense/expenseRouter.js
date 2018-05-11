const router = require("express").Router();

const Expense = require("./expense");

router.post("/", function post(req, res) {
  const expenseData = req.body;
  const expense = new Expense(expenseData);

  expense
    .save()
    .then(expense => {
      res.status(201).json(expense);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/", function get(req, res) {
  Expense.find().then(expenses => {
    res.status(200).json(expenses);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Expense.findById(id)
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Expense.findByIdAndRemove(id)
    .then(expense => {
      if (expense) {
        res.status(204).end();
      } else {
        res.status(404).json({ msg: "Expense not found" });
      }
    })
    .catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;

  const options = {
    new: true
  };

  Expense.findByIdAndUpdate(id, update, options)
    .then(expense => {
      if (expense) {
        res.status(200).json(expense);
      } else {
        res.status(404).json({ msg: "Expense not found" });
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
