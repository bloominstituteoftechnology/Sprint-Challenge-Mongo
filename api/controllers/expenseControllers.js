const Expense = require('../models/expense');

const expenseCreate = (req, res) => {
  const { amount, description, budget, category } =  req.body;
  const newExpense = new Expense({ amount, description, budget, category });
  newExpense.save(newExpense, (err, savedExpense) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(savedExpense);
  })
};

const getAllexpenses = (req, res) => {
	Expense.find({})
		.then(categories => {
		  if (categories.length === 0) throw new Error();
		  res.json(posts)
		})
    	.catch(err => res.status(422).json(err));
};

module.exports = {
  expenseCreate,
  getAllexpenses
};