const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const db = require('./data/db.js');
const budgetRoutes = require('./budget/budgetRoutes');
const expenseRoutes = require('./expense/expenseRoutes')
const categoryRoutes = require('./category/categoryRoutes');

// add your server code

db.connectTo('budgets')
  .then(() => console.log('Connected'))
  .catch(err => console.log(err));

server.use(helmet());
server.use(express.json());

server.use('/api/budget', budgetRoutes);
server.use('/api/expense', expenseRoutes);
server.use('/api/category', categoryRoutes);

server.get('/', (req, res) => {
  res.send('API Running...')
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
