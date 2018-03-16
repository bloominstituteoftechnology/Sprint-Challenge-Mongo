const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Budget = require('./api/models/budgetModel');
const Category = require('./api/models/categoryModel');
const Expense = require('./api/models/expenseModel');

// add your server code

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget');

const db = mongoose.connect('mongodb://localhost/budget', {
  useMongoClient: true
});

server.use(bodyParser.json());

server.post('/budget', (req, res) => {
  const title = req.body.title
  const budgetAmount = req.body.budgetAmount;

  if (!title || !budgetAmount) res.send({ error: 'You are missing either a title or budget amount!' });

  const budget = new Budget(req.body);
  Budget.create(budget)
  .then(data => { res.send(data) })
  .catch(err => { res.send(err) });
})

server.post('/category', (req, res) => {
  const title = req.body.title

  if (!title) res.send({ error: 'You are missing a title!' });

  const category = new Category(req.body);
  Category.create(category)
  .then(data => { res.send(data) })
  .catch(err => { res.send(err) });
})

server.get('/category', (req, res) => {
  Category.find()
  .select("title")
  .then(titles => {res.json(titles);})
  .catch(err => { res.send(err) });
})



server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
