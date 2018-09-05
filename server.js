const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');

const server = express();
const budget = require('./routes/budgetRoute');
const category = require('./routes/categoryRoute');
const expense = require('./routes/expenseRoute');

server.use(express.json());
server.use('/api/budgets', budget);
server.use('/api/categories', category);
server.use('/api/expenses', expense);

const port = process.env.PORT || 5001;

mongoose.connect('mongodb://localhost/sandbox', () => console.log('Good'));

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
