const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const server = express();

const budgetRouter = require('./budget/budgetController');
const expenseRouter = require('./expenses/expenseController');
const categoryRouter = require('./category/categoryController');

server.use(helmet());
server.use(express.json());

server.use('/budget', budgetRouter);
server.use('/expenses', expenseRouter);
server.use('/category', categoryRouter);

server.get('/', (req, res) => res.send("Server is running."));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
