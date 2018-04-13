const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const server = express();
const budgetController = require('./data/budget/budgetController.js');
const expenseController = require('./data/expense/expenseController.js');
const categoryController = require('./data/category/categoryController.js');


// add your server code
const db = require('./data/db.js');

db
.connectTo('stretch')
.then(()=>console.log('connected to db'))
.catch(()=>console.log('failure to connect to db'));

server.use(helmet());
server.use(express.json());
server.use('/api/budgets',budgetController);
server.use('/api/categories',categoryController);
server.use('/api/expenses',expenseController);

server.get('/',(req,res)=>res.send('api running'));


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
