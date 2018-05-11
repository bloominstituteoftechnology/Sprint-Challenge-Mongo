const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');

//new db file
const db = require('./db');
//routers
const budgetRouter = require('./budgets/budgetRouter'); // budget router 
const expenseRouter = require('./expenses/expenseRouter'); // expense router
const categoryRouter = require('./categories/categoryRouter'); // category router 

const server = express();

// add your server code

db
.connectTo()



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});