const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const server = express();

const db = require('./data/db.js');
const budgetRouter = require('./routes/budgetRouter.js');
const expenseRouter = require('./routes/expenseRouter.js');
const categoryRouter = require('./routes/categoryRouter.js');


db
  .connectTo('budgetTracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

// middlewarez
server.use(helmet());
server.use(express.json());

// add your server code
server.use('/api/budget', budgetController);
server.use('/api/expense', expenseController);
server.use('/api/category', categoryController);


server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});