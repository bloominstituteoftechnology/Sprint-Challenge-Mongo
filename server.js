const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const Budget = require('./budget/Budget.js');
const Category = require('./category/Category.js');
const Expense = require('./expense/Expense.js');

// Connect to mongo
mongoose
.connect('mongodb://localhost/budgettrackdb')
.then(mongo => {
  console.log('Connected')
})
.catch(err => {
  console.log('Not Connected')
});

const server = express();

// Middleware
server.use(express.json())


// add your server code

server.get('/', (req, res) => {
  res.send('Server is up and running')
})

server.post('/budgets', (req, res) => {
  const budgetData = req.body;
  const budget = new Budget(budgetData);

  budget
  .save()
  .then(budget => {
    res.json({budget})
  })
  .catch(err => {
    res.json(err)
  })
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
