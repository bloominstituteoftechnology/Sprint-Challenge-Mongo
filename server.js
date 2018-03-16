const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const mongoose = require('mongoose');

const server = express();

// add your server code
server.use(helmet());
server.use(express.json());

const budgetRouter = require('./db/BudgetRoutes');
// const categoryRouter = require('./db/CategoryRoutes');
// const expenseRouter = require('./db/ExpenseRoutes');

server.use('/api/budget', budgetRouter);
// server.use('/api/category', categoryRouter);
// server.use('/api/expense', expenseRouter);

mongoose
  .connect('mongodb://localhost/BudgetTracker')
  .then(conn => {
    console.log('Successfully Connected to MongoDB');
  })
  .catch(err => {
    console.log('Database connection failed');
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
