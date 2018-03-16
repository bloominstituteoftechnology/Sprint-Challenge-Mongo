const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// const budgetRouter = require('./budget/budgetRouter.js');
// const expenseRouter = require('./expense/expenseRouter.js');
// const categoryRouter = require('./category/categoryRouter.js');

mongoose
  .connect('mongodb://localhost/Budget_Tracker')
  .then(conn => {
    console.log('connected to mongo');
  })
  .catch(err => {
    console.log('error connect to mongo');
});

// server.use('/api/budget', budgetRouter);
// server.use('/api/expense', expenseRouter);
// server.use('/api/category', categoryRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
