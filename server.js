const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

const budgetRouter = require('./controllers/budget');
const categoryRouter = require('./controllers/category');
const expenseRouter = require('./controllers/expense');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  req.status(200).send('API Running');
});

server.use('/budget', budgetRouter);
server.use('/category', categoryRouter);
server.use('/expense', expenseRouter);

mongoose
  .connect('mongodb://localhost/BudgetTracker')
  .then(res => {
    console.log('Successfully connected to MongoDB');
  })
  .catch(err => {
    console.log('Database connection failed. Error: ', err);
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
