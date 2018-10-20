const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose')
const BudgetController = require('./Budget/budgetController')
const CategoryController = require('./Category/categoryController')
const ExpenseController = require('./Expense/expenseRoutes')

mongoose.connect('mongodb://localhost/budgetdb');
const server = express();
server.use(express.json());
server.use('/budgets',BudgetController);
server.use('/categories',CategoryController);
 server.use('/expenses',ExpenseController);


// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
