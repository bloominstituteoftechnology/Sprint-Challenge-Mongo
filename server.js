const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const server = express();

const db = require('./data/db.js');
const budgetController = require('./routes/budgetController.js');
const expenseController = require('./routes/expenseController.js');
const categoryController = require('./routes/categoryController.js');


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