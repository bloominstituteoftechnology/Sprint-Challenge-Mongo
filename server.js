const express = require('express'); // remember to install your npm packages

const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();

const budgetRouter = require('./budget/budgetRouter');
const expenseRouter = require('./expense/expenseRouter');
const categoryRouter = require('./Category/CategoryRouter');

server.use(helmet());
server.use(express.json())

server.use('/budget', budgetRouter);
server.use('/expense', expenseRouter);
server.use('/category', categoryRouter);

server.get('/', (req, res) => res.send('API Running'));

mongoose.connect('mongodb://localhost:27017/budgetdb')
  .then(mongo => {
    console.log( 'API Connected to Database' );
  })
  .catch(err => {
    console.log( 'ERROR Connecting to Database', err );
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
