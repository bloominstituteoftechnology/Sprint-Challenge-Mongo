const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const server = express();

const db = require('./src/db.js');
const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');


server.use('hemet');
server.user(express.json())
// add your server code

db
  .connectTo('budgetTracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use('/api/budget', budgetRouter);
server.use('/api/category', budgetRouter);
server.use('/api/expense', budgetRouter);



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
