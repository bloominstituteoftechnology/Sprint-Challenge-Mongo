const express = require('express'); // remember to install your npm packages
const budgetRouter = require('./Budget/budgetRouter')
const CategoryRouter = require('./Category/categoryRouter')
const expenseRouter = require('./Expense/expenseRouter')
const server = express();

// add your server code
server.use(express.json())

server.use('/budgets',budgetRouter)
server.use('/categories',CategoryRouter)
server.use('/expenses',expenseRouter)

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
