const express = require('express'); 
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
server.use(bodyParser.json());

//==============================
//         MODEL IMPORTS
//==============================

const Budget = require('./models/BudgetModel.js');
const Expense = require('./models/ExpenseModel.js');
const Category = require('./models/CategoryModel.js');

//==============================
//          ENDPOINTS
//==============================

server.post('/budget', (req, res) => {
  const { title, budgetAmount } = req.body;

  if (!title || !budgetAmount) {
    res.status(400).json({ message: 'Must provide a title and budget!' });
  } else {
    const budget = new Budget(req.body)
    budget
      .save()
      .then(budget => {
        res.status(201).json(budget);
      })
      .catch(err => {
        res.status(500).json({ message: 'Something went wrong!' });
      });
  };
});

server.post('/category', (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400).json({ message: 'Must provide a title!' });
  } else {
    const category = new Category(req.body)
    category
      .save()
      .then(category => {
        res.status(201).json(category);
      })
      .catch(err => {
        res.status(500).json({ message: 'Something went wrong!' });
      });
  };
});

server.get('/category', (req, res) => {
  Category.find()
    .select('-_id -__v')
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(error => {
      res.status(500).json({ message: 'There was an error!' });
    });
});

server.post('/expense', (req, res) => {
  const { amount, description, budget, category } = req.body;

  if (!amount || !description || !budget || !category) {
    res.status(400).json({ message: 'All fields must be filled out!' });
  } else {
    const expense = new Expense(req.body);
    expense
      .save()
      .then(expense => {
        res.status(200).json(expense);
      })
      .catch(error => {
        res.status(500).json({ message: 'There was an error!' });
      });
  };
});

server.get('/expense', (req, res) => {
  Expense.find()
    .populate('budget')
    .populate('category')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(error => {
      res.status(500).json({ message: 'There was an error!' });
    });
});

//==============================
//      SERVER INFORMATION
//==============================

mongoose
  .connect('mongodb://localhost/budget')
  .then(() => {
    server.listen(3000, () => console.log('API Server running on port 3000'));
  })
  .catch(error => {
    console.error('database connection failed');
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
