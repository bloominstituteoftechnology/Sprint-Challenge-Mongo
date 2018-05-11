const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const budgetRouter = require('./budget/budgetRouter.js')
const categoryRouter = require('./category/categoryRouter.js');
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
server.use('/budgets', budgetRouter);
server.use('/categories', categoryRouter);


// add your server code

// GET for initial page
server.get('/', (req, res) => {
  res.send('Server is up and running')
})

// GET expenses
server.get('/expenses', (req, res) => {

  Expense
  .find().populate('budget category')
  .then(expense => {
    res.json(expense)
  })
  .catch(err => {
    res.json(err)
  }) 
})

// POST expenses
server.post('/expenses', (req, res) => {
  const expenseData = req.body;
  const expense = new Expense(expenseData)

  expense
  .save()
  .then(expense => {
    res.json(expense)
  })
  .catch(err => {
    res.json(err)
  });
});



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
