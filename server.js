const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const db = require('./data/db.js');
const budgetRouter = require('./Budget/budgetRouter');
const categoryRouter = require('./Category/categoryRouter');
const expenseRouter = require('./Expense/expenseRouter');

const server = express();

// add your server code

db
  .connectTo('budgetTracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());

server.use('/budget', budgetRouter);
server.use('/category', categoryRouter);
server.use('/expense', expenseRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
