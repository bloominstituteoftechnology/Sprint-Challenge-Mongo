const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const server = express();

const port = process.env.PORT || 3000;

// const routes = require('./api/routes/routes');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

const db = mongoose.connect('mongodb://localhost/budget', {
  useMongoClient: true
});

const Budget = require('./api/models/budget');
const Category = require('./api/models/category');
const Expense = require('./api/models/expense');

server.use(bodyParser.json());

// routes(server);

server.post('/budget', (req, res) => {
  const { title, budgetAmount } = req.body;
  const budget = new Budget(req.body);
  Budget.create(budget)
  .then(savedBudget => {
    res.send(savedBudget);
  })
  .catch(err => {
    res.send({ error: 'There was a problem creating a new budget.' });
  });
});

server.post('/category', (req,res) => {
  const { titel } = req.body;
  const cat = new Category({ title });
  Category.create(cat)
  .then(savedCat => {
    res.send(savedCat);
  })
  .catch(err => {
    res.send({ err });
  });
});

servert.get('/category', (req, res) => {
  Category.find({}, {_id: 0, _v: 0 })
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
  Expense.find({}, { _id: 0, _v: 0 })
  .populate('budget', '-_id')
  .populate('category', '-_id')
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
