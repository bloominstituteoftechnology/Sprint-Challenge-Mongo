const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();

//=== Controller Defs ===//
const budgetController = require('./data/budget/budgetController.js');
const categoryController = require('./data/category/categoryController.js');
const expenseController = require('./data/expense/expenseController.js');

//=== Middleware ===//
server.use(helmet());
server.use(cors());
server.use(express.json());

//=== API Defs ===//
server.use('/api/budgets', budgetController);
server.use('/api/categories', categoryController);
server.use('/api/expenses', expenseController);

//=== Mongoose ===//
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budgetTracker', {}, err => {
  if (err) console.log({ error: err.message });
  if (!err) console.log(`Mongoose is connected to the DB.`)
})

//=== Test Server ===//
server.get('/', (req, res) => res.json({ api: `running` }));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
