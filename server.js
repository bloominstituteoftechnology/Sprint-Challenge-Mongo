const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

const budgetRouter = require('./Routers/BudgetRouter.js');
const categoryRouter = require('./Routers/CategoryRouter.js');
const expenseRouter = require('./Routers/ExpenseRouter.js');

const server = express();

// add your server code
server.use(helmet());
server.use(express.json());

server.use('/budget', budgetRouter);
server.use('/category', categoryRouter);
server.use('/expense', expenseRouter);

server.get('/', (req, res) => {
  res.status(200).json({Status: 'Amanda API Running'})
})

mongoose.connect('mongodb://localhost/store')
  .then(conn => {
    console.log('Connection to MongoDB');
  })
  .catch(error => {
    console.log('Database Connection Failed')
  })

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
