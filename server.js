const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();

const Budget = require('./models/Budget.js');
const Category = require('./models/Category.js');
const Expense = require('./models/Expense.js');

server.use(cors());
server.use(helmet());
server.use(bodyParser.json());

server.post('/budget', (req, res) => {
  const budget = new Budget(req.body);
  budget
    .save()
    .then(budget => {
      res.json(budget);
    })
    .catch(err => {
      res.status(500).json({msg: 'There was an error saving the budget'});
    });
});

server.post('/category', (req, res) => {
  const category = new Category(req.body);
  category
    .save()
    .then(cat => {
      res.json(cat);
    })
    .catch(err => {
      res.status(500).json({msg: 'There wan an error saving the category.'});
    });
});

server.get('/category', (req, res) => {
  Category.find()
    .select('title')
    .then(cats => {
      res.json(cats);
    })
    .catch(err => {
      res
        .status(500)
        .json({msg: 'There was an error receiving the categories'});
    });
});

server.post('/expense', (req, res) => {
  const expense = new Expense(req.body);
  expense
    .save()
    .then(expense => {
      res.json(expense);
    })
    .catch(err => {
      res.status(500).json({msg: 'There was an error saving the expense.'});
    });
});

server.get('/expense', (req, res) => {
  Expense.find()
    .populate('category', 'title')
    .populate('budget', 'title budgetAmount')
    .then(expenses => {
      res.json(expenses);
    })
    .catch(err => {
      res.status(500).json({msg: 'There was an error receiving the expenses'});
    });
});

mongoose
  .connect('mongodb://localhost/budgets')
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.log('Connection to MongoDB failed'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
