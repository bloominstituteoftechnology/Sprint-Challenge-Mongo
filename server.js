const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const server = express();

const db = require('./data/db');

const budgetRouter = require('./routers/budgetRouter');
const expenseRouter = require('./routers/expenseRouter');
const categoryRouter = require('./routers/categoryRouter');

db
.connectTo('budgetTracker')
.then(() => console.log('\n... API Connected to Database ...\n'))
.catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

// add your server code
server.use(express.json());
server.use(helmet());

server.use('api/budget', budgetRouter);
server.use('api/expense', expenseRouter);
server.use('api/category', categoryRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
