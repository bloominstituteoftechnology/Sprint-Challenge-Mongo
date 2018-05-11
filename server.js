const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const db = require('./data/db.js'); // this will be my database

const budgetRouter = require('./Budget/budgetRouter.js');
const categoryRouter = require('./Category/categoryRouter.js');
const expenseRouter = require('./Expense/expenseRouter.js');


const server = express();

// add your server code

db
  .connectTo('budgettracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);

server.get('/', (req, res) => res.send('API Running...'));


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}`);
});





