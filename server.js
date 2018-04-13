const express = require('express');
const helmet = require('helmet');

const db = require('./db');
const budgetRouter = require('./budgets/budgetRouter');
const categoryRouter = require('./categories/categoryRouter');
const expenseRouter = require('./expenses/expenseRouter');

const server = express();

db
  .connectTo('budgetTracker')
  .then(() => console.log('\n... Successful Connection ... \n'))
  .catch(err => console.log('\n*** ERROR: Connection Failed ***\n', err));

server.use(helmet());
server.use(express.json());
server.use('/api/budgets', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
