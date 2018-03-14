const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const server = express();

const port = process.env.PORT || 3000;

const Budget = require('./api/models/budget');
const Category = require('./api/models/category');
const Expense = require('./api/models/expense');

const routes = require('./api/routes/routes');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://schroeder:pass@ds245548.mlab.com:45548/lsplay', { useMongoClient: true });

server.use(bodyParser.json());

server.post('/budget', (req, res) => {
  const budget = new Budget(req.body);
  Budget.create(budget)
    .then(newBudget => {
      res.send({newBudget});
    }).catch(err => {
      res.send({err: 'Unable to create new Budget'})
    });
});

server.post('/category', (req, res) => {
  const title = req.body.title;
  const catego = new Category(req.body);
  Category.create(catego)
    .then(title => {
      res.status(200).send('Category successfully created')
    })
    .catch(err => {
      res.status(500).send({err: 'Unable to create Category'})
    });
});

server.get('/category', (req, res) => {
  Category.find()
    .then(results => {
    res.send({results});
  }).catch(err => {
    res.send({err: 'Could not retrieve categories.'})
  });
});

server.post('/expense', (req, res) => {
  const expense = new Expense(req.body);
  Expense.create(expense).then(exp => {
    res.send(exp)
  }).catch(err => {
    res.send({err})
  });
});

// routes(server);

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
