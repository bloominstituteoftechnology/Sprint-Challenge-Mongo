const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const mongoose = require('mongoose');

const server = express();

// add your server code
server.use(helmet());
server.use(express.json());

const Budget = require('./db/BudgetModel');
const Category = require('./db/CategoryModel');
const Expense = require('./db/ExpenseModel');

// const budgetRouter = express.Router();
// const expenseRouter = express.Router();
// const categoryRouter = express.Router();

// POST to '/budget'
server.post('/budget', function(req, res) {
  const budgetInfo = req.body;
  const budget = new Budget(budgetInfo);
  budget
  .save()
  .then(savedBudget => {
    if (!budgetInfo.title || !budgetInfo.budgetAmount) {
      res.status(400).json({ errorMessage: "Please provide both title and budget amount for the new budget." });
  }
  res.status(201).json(savedBudget);
  })
});

server.get('/category', function(req, res) {
  Category.find({})
  .then(categories => {
    res.status(200).json(categories);
  })
  .catch(err => {
    res.status(500).json({ error: "The category could not be retrieved." });
  });
});

server.post('/category', function(req, res) {
  const categoryInfo = req.body;
  const category = new Category(categoryInfo);
  category
  .save()
  .then(savedCategory => {
    if (!categoryInfo.title ) {
      res.status(400).json({ errorMessage: "Please provide a category title." });
  }
  res.status(201).json(savedCategory);
  })
});

server.post('/expense', function(req, res) {
  const expenseInfo = req.body;
  const expense = new Expense(expenseInfo);
  console.log(expense);
  expense
  .save()
  .then(savedExpense => {
    if (!expenseInfo.amount ) {
      res.status(400).json({ errorMessage: "Please provide an expense amount." });
  }
  res.status(201).json(savedExpense);
  })
});

server.get('/expense', function(req, res) {
  Expense.find()
  .populate('budget', 'title')
  .populate('category', 'title')
  .then(expenses => res.status(200).json(expenses))
  .catch(err => {
    res.status(500).json({ error: "The category could not be retrieved." });
  });
});

mongoose
  .connect('mongodb://localhost/BudgetTracker')
  .then(conn => {
    console.log('Successfully Connected to MongoDB');
  })
  .catch(err => {
    console.log('Database connection failed');
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
