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

// GET all of the categories
server.get('/categories', (req, res) => {

  Category
  .find().select('title -_id')
  .then(categories => {
    res.json(categories)
  })
  .catch(err => {
    res.json(err)
  })
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
