const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

const budgetRouter = require('./budget/budgetRouter');
const categoryRouter = require('./category/categoryRouter');
const expenseRouter = require('./expense/expenseRouter');


const server = express();

server.use(helmet());
server.use(express.json());

// add your server code

server.get('/', (req, res) => res.send('API Running...'));

server.use('/api/budgets', budgetRouter);
// server.use('api/categories', categoryRouter);
// server.use('/api/expenses', expenseRouter);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbTracker', {}, err => {
  if (err) console.log(err);
  console.log('Mongoose connected us to our DB');
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
