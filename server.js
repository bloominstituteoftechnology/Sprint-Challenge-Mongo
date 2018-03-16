const express = require('express'); // remember to install your npm packages

const server = express();

const Budget = require('./models/budget.js');
const Category = require('./models/Category.js');
const Expense = require('./models/Expense.js');

server.post('/', (req, res) => {
  const { _id, title, budgetAmount } = req.body;
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
