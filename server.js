const express = require('express'); 
const mongoose = require('mongoose');

const Budget = require('./routes/budgetRouter.js');
const Category = require('./routes/categoryRouter.js');
const Expense = require('./routes/expenseRouter.js');

const server = express();
server.use(express.json());

server.use('/budget', Budget);
server.use('/category', Category);
server.use('/expense', Expense);

mongoose
.connect('mongodb://localhost/BudgetTrackerApp')
.then(connect => console.log('Successful connection to MongoDB.'))
.catch(err => console.exception('Connection to database failed.'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
