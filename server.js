const express = require('express'); // remember to install your npm packages

const morgan = require('morgan');
const helmet = require('helmet');
const server = express();

// add your server code
const db = require('./data/db.js');
const budgetRouter = require('./budget/budgetRouter');
const expenseRouter = require('./expense/expenseRouter');
const categoryRouter = require('./Category/CategoryRouter');

db
  .connectTo('budgetTracker')
  .then(() => console.log('\n... API connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err))

server.use(helmet());
server.use(express.json())

server.use('/budget', budgetRouter);
server.use('/expense', expenseRouter);
server.use('/category', categoryRouter);

server.get('/', (req, res) => res.send('API Running'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
