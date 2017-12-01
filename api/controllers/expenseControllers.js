const Expense = require('../models/expense');

const expenseCreate = (req, res) => {
  const { amount, description } = req.body;
  const { budget, category } = req.params; 
  const newExpense = new Expense({ amount, description, budget, category });
  newExpense.save(newExpense, (err, savedExpense) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(savedExpense);
  });
};

const expensesGetAll = (req, res) => {
  const { amount, description } = req.body;
  const { budget, category } = req.params;
  Expense.find({})
    .select('amount description', '_category', ['title'], '_budget', ['title'])
    .exec()
    .then(expenses => {
      if (expenses.length === 0) throw new Error();
      res.json(expenses);
    })
    .catch(err => res.status(422).json(err));
};

const expenseGetById = (req, res) => {
  const { id } = req.params;
  Expense.findById(id)
    .populate('amount description', '_category', ['title'], '_budget', ['title'])
    .exec()
    .then(singleExpense => {
      if (singleExpense === null) throw new Error();
      res.json(singleExpense);
    })
    .catch(err => res.status(422).json(err));
};



module.exports = {
  expenseCreate,
  expensesGetAll,
  expenseGetById,
  expenseCommentAdd
};
