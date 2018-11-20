const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose')
const budgetRouter = require('./budget/budgetRouter.js')
const categoriesRouter = require('./categories/categoriesRouter.js')
const expensesRouter = require('./expenses/expensesRouter.js')


const server = express();

// add your server code
server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({api: running})
})
server.use('/api/categories', categoriesRouter);
server.use('/api/expenses', expensesRouter);
server.use('/api/budget', budgetRouter);
server.use((req, res) => res.status(404).json({error: "The request could not be fulfilled."}))

const port = process.env.PORT || 5000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budgetTracker', {}, err => {
  if(err) {console.log('Db connection failed.')};
  console.log("Successfully connected to MongoDB.")
})

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
