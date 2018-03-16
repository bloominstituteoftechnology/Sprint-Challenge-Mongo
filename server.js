const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

const Budget = require('./Models/BudgetModel.js');
const Category = require('./Models/CategoryModel.js');
const Expense = require('./Models/ExpenseModel.js');

const server = express();

// add your server code
server.use(helmet());
server.use(express.json());

server.post('/budget', (req, res) => {
  const { title, budgetAmount } = req.body;
  
  const budget = new Budget({ title, budgetAmount });
  budget.save()
    .then(savedBudget => {
      res.status(200).json({ BudgetSaved: savedBudget });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error saving new Budget'})
    })
})

server.post('/category', (req, res) => {
  const { title } = req.body;

  const category = new Category({ title });
  category.save()
    .then(savedCategory => {
      res.status(200).json({ CategorySaved: savedCategory });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error saving new Category'});
    })
})

server.get('/category', (req, res) => {
  Category.find({})
    .select('title')
    .then(categories => {
      res.status(200).json({ Categories: categories });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error displaying Categories' });
    })
})

server.post('/expense', (req, res) => {
  const { amount, description, budget, category } = req.body;

  const expense = new Expense({ amount, description, budget, category });
  expense.save()
    .then(savedExpense => {
      res.status(200).json({ SavedExpense: savedExpense });
    })
    .catch(error => {
      res.status(400).json({ error: 'Error Saving Expense' });
    })
})

server.get('/expense', (req, res) => {
  Expense.find({})
    .populate('budget category', 'budgetAmount title')
    .then(expenses => {
      res.status(200).json({ Expenses: expenses });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error displaying Budgets '});
    })
})

server.get('/', (req, res) => {
  res.status(200).json({Status: 'API Running'})
})

mongoose.connect('mongodb://localhost/store')
  .then(conn => {
    console.log('Successfully Connected to MongoDB');
  })
  .catch(error => {
    console.log('Database connection failed')
  })

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
