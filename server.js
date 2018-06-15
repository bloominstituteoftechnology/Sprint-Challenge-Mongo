const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

//const budgetRouter = require('./budget/budgetRouter.js');
//const categoryRouter = require('./category/categoryRouter.js');
//const expenseRouter = require('./expense/expenseRouter.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

// add your server code
// server.use('/api/budgets', budgetRouter);
// server.use('/api/categories', categoryRouter);
// server.use('/api/expenses', expenseRouter);

server.get('/', (req,res) => res.send('API Running...'))

//need to connect mongoose here
mongoose.connect('mongodb://localhost/budgetTracker', {}, (error) => {
  if(error) console.log(error);
  console.log('Mongoose connected us to our DB');
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
