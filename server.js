const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const server = express();

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

const Budget = require('./api/models/budget');
const Category = require('./api/models/category');
const Expense = require('./api/models/expense');

server.use(bodyParser.json());

server.post('/budget', (req, res) => {
  const { title, budgetAmount } = req.body;
  const budget = new Budget(req.body);
  Budget.create(budget)
    .then(savedBudget => {
      res.send(savedBudget);
    })
    .catch(err => {
      res.send({ error: 'Error creating the new Budget' });
    });
});

server.post('/category', (req, res) => {
  const { title } = req.body;
  const cat = new Category({ title });
  Category.create(cat)
    .then(savedCat => {
      res.send(savedCat);
    })
    .catch(err => {
      res.send({ err });
    });
});

server.get('/category', (req, res) => {
  Category.find({}, { _id: 0, __v: 0 })
    .then(cats => {
      res.send(cats);
    })
    .catch(err => {
      res.send(err);
    });
});

server.post('/expense', (req, res) => {
  const { amount, description, budget, category } = req.body;
  const expense = new Expense(req.body);
  Expense.create(expense)
    .then(savedExpense => {
      res.send(savedExpense);
    })
    .catch(err => {
      res.send({ err });
    });
});

server.get('/expense', (req, res) => {
  Expense.find({}, { _id: 0, __v: 0 })
    .populate('budget', '-__id')
    .populate('category', '-__id')
    .then(expenses => {
      res.send(expenses);
    })
    .catch(err => {
      res.send({ err });
    });
});

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
