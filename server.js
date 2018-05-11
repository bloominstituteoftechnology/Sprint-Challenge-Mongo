const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/budget')
  .then(mongo => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log('error connecting to database', err);
  });

const budgetController = require('./budget/budgetRouter');
const categoryController = require('./category/catergoryRouter');
const expenseController = require('./expense/expenseRouter');

const server = express();

// add your server code

errorHandler = (err, req, res, next) => {
  if (err) {
      if (err.errno === 19) {
          res.status(400).json({ msg: 'Please provide all required fields' });
      } else {
          console.log(err)
          res.status(500).json({ error: 'something bad happened', whatHappened: err });
      }
  }
}

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.use('/api/budgets', budgetController);
server.use('/api/categories', categoryController);
server.use('/api/expenses', expenseController);

server.use(errorHandler);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
