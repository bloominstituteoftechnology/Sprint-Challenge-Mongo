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

// GET for initial page
server.get('/', (req, res) => {
  res.send('Server is up and running')
})

// POST to create an initial budget
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

// POST to create a new category
server.post('/categories', (req, res) => {
  const categoryData = req.body;
  const category = new Category(categoryData);

  category
  .save()
  .then(category => {
    res.json(category)
  })
  .catch(err => {
    res.json(err)
  })
})

// GET expenses
server.get('/expenses', (req, res) => {

  Expense
  .find()
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
