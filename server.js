const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const server = express();

const Budget = require('./Budget/BudgetModel');
const Category = require('./Category/CategoryModel');
const Expense = require('./Expense/ExpenseModel');

mongoose.connect('mongodb://localhost/budget-tracker');

server.use(cors());
server.use(bodyParser.json());

// add your server code

server.post('/budget', (req, res) => {
  const BudgetList = req.body;
  const {
    title,
    budgetAmount
  } = req.body;

  if (!title || !budgetAmount) {
    console.log(error);
    res.status(400).json({ errorMessage: 'Please provide title and budget amount.' });
  }

  const budget = new Budget(BudgetList);

  budget
    .save()
    .then(newBudget => {
      res.status(200).json(newBudget);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'There was an error while saving the budget to the database.' });
    })
});

server.post('/category', (req, res) => {
  const CategoryList = req.body;
  const {
    title
   } = req.body;

  if (!title) {
    console.log(error);
    res.status(400).json({ errorMessage: 'Please provide the title.' });
  }

  const category = new Category(CategoryList);

  category
    .save()
    .then(newCategory => {
      res.status(200).json(newCategory)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'There was an error while saving the category to the database.' });
    })
});

server.get('/', (req, res) => res.send('API Running...'));

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
