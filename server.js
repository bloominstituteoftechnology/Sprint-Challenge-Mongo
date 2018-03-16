const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const Budget = require('./models/BudgetModel');
const Expense = require('./models/ExpenseModel');
const Category = require('./models/CategoryModel');

const server = express();

server.use(helmet());
server.use(express.json());

// add your server code

const STATUS_SUCCESS = 200;
const STATUS_CREATED = 201;
const STATUS_BAD_REQUEST = 400;
const STATUS_NOT_FOUND = 404;
const STATUS_USER_ERROR = 500;

server.post('/budget', (req, res) => {
   const budgetInfo = req.body;
   const budget = new Budget(budgetInfo);
  console.log(budget);
   budget
      .save()
      .then(savedBudget => {
         res.status(STATUS_CREATED);
         res.send(savedBudget);
      })
      .catch(err => {
         res.status(STATUS_USER_ERROR);
         res.send({ error: 'error while saving budget' });
      });
});

server.post('/category', (req, res) => {
   const categoryInfo = req.body;
   const category = new Category(categoryInfo);

   category
      .save()
      .then(savedCategory => {
         res.status(STATUS_CREATED);
         res.send(savedCategory);
      })
      .catch(err => {
         res.status(STATUS_USER_ERROR);
         res.send({ error: 'error while saving category' });
      });
});

server.get('/category', (req, res) => {
   Category.find({}).then(categories => {
      const clean = ['Available categories are'];
      categories.forEach(category => clean.push(category.title));
      res.status(STATUS_SUCCESS);
      res.send(clean);
   });
});

server.post('/expense', (req, res) => {
   const exp = new Expense(req.body);
   exp
      .save()
      .then(savedExp => {
         res.status(STATUS_CREATED);
         res.send(savedExp);
      })
      .catch(err => {
         res.status(STATUS_USER_ERROR);
         res.send({ error: 'error while saving expense' });
      });
});

server.get('/expense', (req, res) => {
   Expense.find({})
    .populate('budgets')
    .populate('categories')
    .then(exp => {
      res.status(STATUS_SUCCESS);
      res.send(`expenses are: ${exp}`);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR);
      res.send('error finding expense');
    })
});

mongoose
   .connect('mongodb://localhost/budget')
   .then(() => {
      console.log('connected to mongodb');
   })
   .catch(error => {
      console.error('database connection failed');
   });

const port = process.env.PORT || 5000;
server.listen(port, () => {
   console.log(`Server up and running on ${port}`);
});
