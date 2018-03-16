const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const budgetRouter = require('./budget/budgetRouter');

const server = express();

// add your server code

server.use(helmet());
server.use(cors());
server.use(bodyParser());
server.use(express.json());

server.use('budget', budgetRouter);

server.get('/', (req, res) => {
  res.status(200).json({ status: 'Running ' })
})

mongoose
  .connect('mongodb://localhost/BudgetTracker')
  .then(conn => {
    console.log('Successfully connected to MongoDB');
  })
  .catch(err => {
    console.log('Database connection failed', err);
  })

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
