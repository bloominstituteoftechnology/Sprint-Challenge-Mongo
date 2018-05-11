const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const mongoose = require('mongoose');
const model = require('./budget/Budget');
const BudgetRouter = require('./budget/budgetRouter');
const CategoryRouter = require('./category/categoryRouter');
const ExpenseRouter = require('./expense/expenseRouter');

server.use(helmet());
server.use(express.json());
server.use(cors());

// add your server code

//connect to mongod server
mongoose
  .connect('mongodb://localhost/budgetdb')
  // .connect('mongodb://host_name/database_name')
  .then(mongo => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log('Error connecting to database', err);
  });


//endpoints

server.use('/budgets',BudgetRouter);
server.use('/categories', CategoryRouter);
server.use('/expenses', ExpenseRouter); 

// server.post('/budget', (req, res) => {
//   const newBudget = new model(req.body);
//   newBudget.save()
//   .then(response => res.send(response))
//   .catch(err => console.log(err))
// })





const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
