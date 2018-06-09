const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const db = require('./data/db');
const budgetRoutes = require('./budget/Budget.js');
const categoryRoutes = require('./category/Category.js');
const expenseRoutes = require('./expense/Expense.js');

const server = express();

db
  .connectTo('budget')
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log('Error', err));
// add your server code

server.use(helmet());
server.use(express.json());

server.use('/api/budget', budgetRoutes);
server.use('/api/category', categoryRoutes);
server.use('/api/expense', expenseRoutes);

// server.get('/', (req, res) => {
//   res.send('Working!!!')
// })

// server.post('/', (req, res) => {
//   res.send('Working!!!')
// })

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
