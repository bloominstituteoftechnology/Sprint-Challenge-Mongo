const express = require('express'); // remember to install your npm packages
const cors = require('cors'); 
const helmet = require('helmet'); 
const mongoose = require('mongoose');

const server = express();

// add your server code

const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

server.use(helmet()); 
server.use(cors());
server.use(express.json()); 

server.use('/api/budgets', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter); 

server.get('/', (req, res) => {
  res.status(200).json({ api: 'runnning' }); 
}); 

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost/dbBudget',
   {}, 
   error => {
     if (error) console.log({error: error.message });      
     console.log('Mongoose connected us to our database!'); 
   }
); 

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
