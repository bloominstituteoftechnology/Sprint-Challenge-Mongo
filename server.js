const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const budgets = require('./routes/budgets');
const categories = require('./routes/categories');
const expenses = require('./routes/expenses');

const server = express();

mongoose.connect('mongodb://localhost/trackerdb')
  .then(() => {
    console.log('API CONNECTED TO DATABASE')
  })
  .catch(error => {
    console.log(`ERROR CONNECTING TO DB, ${error}`)
  })

server.use(helmet());
server.use(express.json());

server.use('/api/budgets', budgets)
server.use('/api/categories', categories)
server.use('/api/expenses', expenses)

server.get('/', (req, res) => {
  res.send('API is running...')
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
