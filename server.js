const express = require('express'); // remember to install your npm packages [x]
const helmet = require('helmet');
const mongoose = require('mongoose');

const budgetRouter = require('./budgets/budgetRouter');
const categoryRouter = require('./categories/categoryRouter');
const expenseRouter = require('./expenses/expenseRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/budgets', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);

server.get('/', (req, res) => res.send('API Running...'));

// add your server code [m]

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbFriends', {}, (error) => {
  if (error) console.log(error);
  console.log('Mongoose connected to our DB');
})

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});