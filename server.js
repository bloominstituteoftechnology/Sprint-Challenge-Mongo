const express = require('express'); // remember to install your npm packages
const helmet = require('helmet')
const db = require('./data/db.js')
const budgetRouter = require('./Budget/BudgetRouter.js')
const categoryRouter = require('./Category/CategoryRouter.js')
const expenseRouter = require('./Expense/ExpenseRoruter.js')



const server = express();

// add your server code

db
  .connectTo('BudgetTracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet())
server.use(express.json())

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);

server.get('/', (req, res) => res.send('API Running...'));


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
