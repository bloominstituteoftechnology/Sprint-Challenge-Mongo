const express = require('express'); // remember to install your npm packages
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('Connected to DB'))
  .catch(error => console.log('Error connecting to DB', error))

server.use(express.json());
server.use(cors());
server.use(helmet());

const budgetRouter = require('./budget/budgetRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');
const categoryRouter = require('./category/categoryRouter.js');

server.use('/api/budget', budgetRouter);
server.use('/api/expense', expenseRouter);
server.use('/api/category', categoryRouter);


server.get('/', (req, res) => {
  res.status(201).json('Server Running')
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
