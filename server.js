const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

// const budgetController = require('./budgets/budgetController.js');
// const expenseController = require('./expenses/expenseController.js');
// const categoryController = require('./categories/categoryController.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', function(req, res) {
  res.json({ api: 'running' });
});

// server.use('/api/budgets', budgetController);
// server.use('/api/expenses', expenseController);
// server.use('/api/categories', categoryController);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbFriends', {}, error => {
  if (error) console.log("Database connection failed");
  else console.log("Successfully Connected to MongoDB");
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n=== API running on http://localhost:${port} ===\n`);
});
