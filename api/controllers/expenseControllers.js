const Expense = require('../models/expense');

const SERVER_STATUS_ERROR = 500;
const USER_STATUS_ERROR = 422;

const expenseCreate = (req, res) => {
  const { amount, description, budget, categories } = req.body;
  const newExpense = new Expense({ amount, description, budget, categories });
  newExpense
    .save()
    .then(expense => {
      if (expense === null) {
        res.status(SERVER_STATUS_ERROR).json({ error: err.message });
      }
      res.json(expense);
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
};

const getExpense = (req, res) => {
  const { id } = req.params;
  Expense.findById(id)
    .exec()
    .then(expense => {
      if (expense === null) {
        res.status(USER_STATUS_ERROR).json({ error: err.message });
      };
      res.json(expense);
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
};
//still workin on the next two parts 
const budgetAdd = (req, res) => {
  const { id } = req.params;
  const { title, budgetAmount } = req.body;
  const newBudget = { title, budgetAmount };
  Expense.findById(id)
    .exec()
    .then(expense => {
      if (expense === null) {
        res.status(SERVER_STATUS_ERROR).json({ error: err.message });
      };
      let budgets = expense.budget
      budgets = { newBudget }
      expense
        .save()
        .then(newBudget => {
          Expense.findById(newBudget._id)
            .exec((err, savedExpense) => {
              if (err) {
                throw new Error();
              };
            });
        })
        .catch(err => {
          res.status(USER_STATUS_ERROR).json({ error: err.message });
        });
    })
    .catch(err => {
      res.status(USER_STATUS_ERROR).json({ error: err.message });
    });
};

const categoryAdd = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const newCategory = { title };
  Post.findById(id)
    .exec()
    .then(expense => {
      if (expense === null){
        throw new Error();
      };
      const categories = expense.categories;
      categories.push(newCategory);
      expense 
        .save()
        .then(newCategory => {
          Expense.findById(newCategory._id)
            .exec((err, savedExpense) => {
              if (err) {
                throw new Error();
              };
            });
        })
        .catch(err => {
          res.status(USER_STATUS_ERROR).json({ error: err.message });
        });
    }).catch(err => {
      res.status(USER_STATUS_ERROR).json({ error: err.message });
    });
};


module.exports = {
  expenseCreate,
  getExpense,
  budgetAdd,
  categoryAdd  
}
