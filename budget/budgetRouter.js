const router = require("express").Router();

const Budget = require("./budget");

router.post("/", function post(req, res) {
  const budgetData = req.body;
  const budget = new Budget(budgetData);

  budget
    .save()
    .then(budget => {
      res.status(201).json(budget);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/", function get(req, res) {
  Budget.find().then(budgets => {
    res.status(200).json(budgets);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Budget.findById(id)
    .then(budgets => {
      res.status(200).json(budgets);
    })
    .catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Budget.findByIdAndRemove(id)
    .then(budget => {
      if (budget) {
        res.status(204).end();
      } else {
        res.status(404).json({ msg: "Budget not found" });
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

  Budget.findByIdAndUpdate(id, update, options)
    .then(budget => {
      if (budget) {
        res.status(200).json(budget);
      } else {
        res.status(404).json({ msg: "Budget not found" });
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
