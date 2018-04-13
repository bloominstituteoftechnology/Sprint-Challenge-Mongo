const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

// add your server code
mongoose
  .connect('mongodb://localhost/budgetDb')
  .then(() => console.log('\n=== connected to mongo ===\n'))
  .catch(err => console.log('error connecting to mongo'))
const budgetController = require('./budgets/budgetController');
const categoryController = require('./budgets/categoryController');
const expenseController = require('./budgets/expenseController');

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/budgets', budgetController);
server.use('/api/budgets', categoryController);
server.use('/api/budgets', expenseController);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
