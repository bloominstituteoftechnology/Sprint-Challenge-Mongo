const express = require('express'); // remember to install your npm packages
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const budgetRouter = require('./budget/budgetRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');
const categoryRouter = require('./category/categoryRouter.js');

const server = express();

const port = process.env.PORT || 5000;

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(201).json('Server Running')
});

server.use('/api/budgets', budgetRouter);
server.use('/api/expenses', expenseRouter);
server.use('/api/categories', categoryRouter);

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('Connected to DB'))
  .catch(error => console.log('Error connecting to DB', error))

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
