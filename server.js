// Packages
const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

// Mongoose
mongoose
  .connect('mongodb://localhost/')
  .then(() => console.log('\n=== connected to mongo ===\n'))
  .catch(err => console.log('error connecting to mongo'));

// Routes
const budgetRoute = require('./models/budget/budgetRoute');
const categoryRoute = require('./models/category/categoryRoute');
const expenseRoute = require('./models/expense/expenseRoute');

// Server Const
const server = express();

// Logger
const logger = (req, res, next) => {
  console.log('d-(OvO")z looks correct to me', req.body);

  next();
};

// Middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

// Server Code
server.get('/', (req, res) => {
  // It work?
  res.status(200).json({ api: 'running' });
});

// Routes
server.use('/api/budgets', budgetRouter);
server.use('/api/categoryRoute', categoryRoute);
server.use('/api/expenseRoute', expenseRoute);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
