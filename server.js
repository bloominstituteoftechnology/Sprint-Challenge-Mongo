const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const server = express();

// add your server code
const db = require('./?')
const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

db
  .connectTo('?')
  .then(() => console.log('\n DB connected \n'))
  .catch(err => console.log('\n DB connection error \n', err));

server.use('/api/?', budgetRouter);
server.use('/api/?', categoryRouter);
server.use('/api/?', expenseRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

