const express = require('express'); // remember to install your npm packages
const cors = require('cors');
const mongoose = require('mongoose');

const budgetRouter = require('./routes/budgetRouter');
const expenseRouter = require('./routes/expenseRouter');
const categoryRouter = require('./routes/categoryRouter');

const server = express();

mongoose
  .connect('mongodb://localhost/finance')
  .then(() => console.log('\n=== connected to Mongo ===\n'))
  .catch(err => console.log('error connecting to DB'));

// add your server
server.use(express.json());
server.use(cors());
server.use('/api/budgets', budgetRouter);
server.use('/api/expenses', expenseRouter);
server.use('/api/categories', categoryRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
