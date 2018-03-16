const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
const server = express();

const Budget = require('./Budget/BudgetModel.js');
const Category = require('./Category/CategoryModel.js');
const Expense = require('./Expense/ExpenseModel.js');

mongoose.connect('mongodb://localhost/budget-tracker');

server.use(cors());

// add your server code

server.post('/budget', (req, res) => {

});

server.get('/', (req, res) => res.send('API Running...'));

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
