const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');


// add your server code

const budgetRouter = require('./budget/budgetrouter.js')
const categoryRouter = require('./category/categoryrouter.js')
const expenseRouter = require('./expense/expenserouter.js')

const server = express();

module.exports = {
  connectTo: function(database = 'sandbox', host = 'localhost') {
    return mongoose.connect(`mongodb://${host}/${database}`)
  }
}

server.use(helmet());
server.use(express.json())

server.use('/api/budget', budgetRouter)
server.use('/api/category', categoryRouter)
server.use('/api/expense', expenseRouter)

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
