const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

// const db = require('./data/db.js');
const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/budgetRouter.js');
const expenseRouter = require('./expense/budgetRouter.js');


const server = express();

mongoose
  .connect('mongodb://localhost/budget')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));
// add your server code

server.use(helmet());
server.use(express.json());

server.use('/api/budgets', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);

server.get('/', (req, res) => res.send('API running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
