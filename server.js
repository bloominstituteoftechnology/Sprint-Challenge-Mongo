const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
// install cors later

const mongoose = require('mongoose');

// connect to mongo
mongoose
  .connect('mongodb://localhost/expenseTrackerDB')
  .then(mongo => {
    console.log('\n... API Connected to Database ...\n')
  })
  .catch(err => {
    console.log('\n*** ERROR Connecting to Database ***\n', err)
  });

  const budgetController = require('./budget/budgetController');
  const categoryController = require('./category/categoryController');
  const expenseController = require('./expense/expenseController');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/budget', budgetController);
server.use('/api/categories', categoryController);
server.use('/api/expenses', expenseController);

server.get('/', (req, res) => res.send('API Running...'));


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
