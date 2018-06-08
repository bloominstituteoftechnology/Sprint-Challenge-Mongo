const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

// const budgetRouter = require('./budgets/budgetRouter.js');
// const expenseRouter = require('./expenses/expenseRouter.js');
// const categoryRouter = require('./categories/categoryRouter.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', function(req, res) {
  res.json({ api: 'running' });
});

// server.use('/api/budgets', budgetRouter);
// server.use('/api/expenses', expenseRouter);
// server.use('/api/categories', categoryRouter);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbFriends', {}, error => {
  if (error) console.log("Database connection failed");
  else console.log("Successfully Connected to MongoDB");
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n=== API running on http://localhost:${port} ===\n`);
});
