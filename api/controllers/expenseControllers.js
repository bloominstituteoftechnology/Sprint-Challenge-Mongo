const Expense = require('../models/expense');

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

const expenseCreate = (req, res) => {
    const { amount, description, budget, category } = req.body
    const newExpense = new Expense({ amount, description, budget, category});
    newExpense
      .save()
      .then((expense) => {
          res.json(expense)
      })
      .catch((err) => {
          res.status(STATUS_USER_ERROR).json(err)
          return;
      });
};

const allExpensesGet = (req, res) => {
    Expense.find({}, (err, expenses) => {
        if (err) {
            res.status(STATUS_SERVER_ERROR).json(err)
            return;
        }
        const newExpenses = [];
        expenses.forEach((expense) => {
            const expenseObj = {};
            expenseObj.budget = budget.title;
            expenseObj.category = category.title;
            newExpenses.push(expenseObj);
        });
        res.json(newExpenses)
    });
};

// const allExpensesGet = (req, res) => {
//     Expense
//       .find({})
//       .then((expenses) => {
//           res.json(expenses)
//       })
//       .catch((err) => {
//           res.status(STATUS_SERVER_ERROR).json(err)
//           return;
//       });
// };

module.exports = {
    expenseCreate,
    allExpensesGet
};