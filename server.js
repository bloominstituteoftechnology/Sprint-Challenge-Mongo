const express = require('express'); // remember to install your npm packages

const server = express();

const Budget = require('./Budget/BudgetModel.js');
const Category = require('./Category/CategoryModel.js');
const Expense = require('./Expense/ExpenseModel.js');

// add your server code
mongoose.connect('mongodb://localhost/budget-tracker');



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
