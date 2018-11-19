const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');
const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());


server.get('/', (req, res) => res.send('API Running...'));

server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);
server.use('/api/budgets', budgetRouter);
server.use((req, res) => res.status(404).json({ error: "The requested resource is not found." }))


const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budgetTracker', {}, err => {
  if (err) console.log('Database connection failed');
  console.log('Sucessfully connected to MongoDB')
})


server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
