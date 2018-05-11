const express = require('express'); // remember to install your npm packages
const cors = require('cors');
const helmet = require('helmet');

const server = express();

// api require
const db = require('./data/db');
const budgetController = require('./controllers/BudgetController');
const categoryController = require('./controllers/CategoryController');

// connect to database
db.conntectTo('budgetTracker')
    .then(() => console.log('\n... API Connected to Database ...\n'))
    .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

// add your server code
server.use(cors());
server.use(helmet());
server.use(express.json());


server.get('/', (req, res) => {
  res.status(201).json('Server is running')
});

server.use('/api/budgets', budgetController);
server.use('/api/categories', categoryController);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
