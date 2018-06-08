const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors'); 
const budgetRouter = require('./Budget/budgetRouter.js');
const expenseRouter = require('./Expense/expenseRouter.js');
const categoryRouter = require('./Category/categoryRouter.js');

const server = express();

// add your server code

server.use(helmet());
server.use(cors()); 
server.use(express.json());

server.use('/budgets', budgetRouter);
server.use('/expenses', expenseRouter);
server.use('/categories', categoryRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 6000;

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/sprint-challenge-mongo', {}, (error) => {
  if (error) console.log('*** ERROR Connecting to Database. ***'); 
  console.log('... API Connected to Database ...'); 
}); 

server.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}`);
});
