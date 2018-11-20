const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');

const BudgetRouter = require('./api/routers/budgetrouter');
const categoryrouter = require('./api/routers/categoryrouter');
const expenserouter = require('./api/routers/expenserouter');
// add your server code
const server = express();
server.use(express.json());
server.use('/budget', BudgetRouter);
server.use(categoryrouter);
server.use(expenserouter);

server.get('/', (req, res) => {
  res.status(200).json({api: 'Running!'});
});

mongoose
  .connect('mongodb://localhost/budgeter')
  .then(() => console.log('Connected to DB'))
  .catch(() => console.log('Could not connect to DB'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
