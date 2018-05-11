const express = require('express'); // remember to install your npm packages

//new db file
const db = require('./db');
//routers
const budgetRouter = require('./budgets/budgetRouter'); // budget router 
const expenseRouter = require('./expenses/expenseRouter'); // expense router
const categoryRouter = require('./categories/categoryRouter'); // category router 

const server = express();

//server code

db
.connectTo('budgetTracker')
.then(() => {
  console.log('\n...Connection success!...\n')
})
.catch(err => {
  console.log('\n...ERROR: Connection failure...\n')
});

server.use(helmet());
server.use(express.json());
server.use('/api/budgets', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);

server.get('/', (req, res) => {
  res.send('Working');
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});