const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('\n=== Connected to Budget Tracker Database ===\n'))
  .catch(err =>
    console.log('\n=== Error Connecting to Budget Tracker Database ===\n')
  );

const budgetsRouter = require('./budgets/budgetsRouter');
const categoriesRouter = require('./categories/categoriesRouter.js');
const expensesRouter = require('./expenses/expensesRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Server Running....' });
});

server.use('/api/budgets', budgetsRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/expenses', expensesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

// const express = require('express');
// const mongoose = require('mongoose');

// const server = express();

// const Budget = require('./models/budget');
// const Category = require('./models/category');
// const Expense = require('./models/expense');

// mongoose
//   .connect('mongodb://localhost/BudgetTracker')
//   .then(connect => {
//     console.log('API Server Connected');
//   })
//   .catch(error => {
//     console.error('Db connection failed');
//   });

// server.get('/', (req, res) => res.send('API Running...'));

// server.get('/budgets', (req, res) => {
//   Budget.find()
//     .then(budgets => {
//       res.status(200);
//       res.json(budgets);
//     })
//     .catch(err => {
//       res.status(500);
//       res.json({ error: 'Error fetching budgets from db' });
//     });
// });

// server.post('/budgets', (req, res) => {
//   const { title, budgetAmount } = req.body;
//   const budget = new Budget({ title, budgetAmount });
//   budget
//     .save()
//     .then(newBudget => {
//       res.status(200);
//       res.json(newBudget);
//     })
//     .catch(err => {
//       res.status(500);
//       res.json({ error: 'Error saving budget to db' });
//     });
// });

// server.get('/categories', (req, res) => {
//   Category.find()
//     .then(categories => {
//       res.status(200);
//       res.json(categories);
//     })
//     .catch(err => {
//       res.status(500);
//       res.json({ error: 'Error fetching categories from db' });
//     });
// });

// server.post('/categories', (req, res) => {
//   const { title } = req.body;
//   const category = new Category({ title });
//   category
//     .save()
//     .then(newCategory => {
//       res.status(200);
//       res.json(newCategory);
//     })
//     .catch(err => {
//       res.status(500);
//       res.json({ error: 'Error saving category to db' });
//     });
// });

// server.get('expenses', (req, res) => {
//   Expense.find()
//     .populate('budget category')
//     .then(expenses => {
//       res.status(200);
//       res.json(expenses);
//     })
//     .catch(err => {
//       res.status(500);
//       res.json({ error: 'Error fetching expenses from db' });
//     });
// });

// server.post('/expenses', (req, res) => {
//   const { amount, description, budget, category } = req.body;
//   const expense = new Expense({ amount, description, budget, category });
//   expense
//     .save()
//     .then(newExpense => {
//       res.status(200);
//       res.json(newExpense);
//     })
//     .catch(err => {
//       res.status(500);
//       res.json({ error: 'Error saving expense to db' });
//     });
// });

// const port = process.env.PORT || 5000;
// server.listen(port, () => {
//   console.log(`Server up and running on ${port}`);
// });
