const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');



const server = express();
server.use(helmet());
server.use(express.json());

mongoose.connect('mongodb://localhost/budget')
.then(() => console.log('\n===connected to mongo===\n'))
.catch(err =>console.log('not connected'))


const categoryRouter = require('./category/categoryRouter');
const expensesRouter = require('./expenses/expensesRouter');
const budgetRouter = require('./budgets/budgetRouter');

server.use('/api/budgets', budgetRouter);
server.use('/api/expenses', expensesRouter);
server.use('/api/category', categoryRouter);




// add your server code
server.get('/', (req, res) => res.send('API Running...'));
const port = process.env.PORT || 5030;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
