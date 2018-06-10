const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');

const db = require('./data/db.js'); //Creates a db server connection promise
//Create API sub-applications routers here
// const modelsRouter = require('./models/modelsRouter.js');
const budgetsRouter = require('./budgets/budgetsRouter.js');
const categoriesRouter = require('./categories/categoriesRouter.js');
const expensesRouter = require('./expenses/expensesRouter.js');


const server = express();

//connects to the database
db
  .connectTo('dbBudget')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(cors());
server.use(express.json());

// Create API routes
// server.use('route', subAPIRouter);
server.get('/', (req, res) => res.send('Budget tracker API Running...')); //Main route

server.use('/api/budgets', budgetsRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/expenses', expensesRouter);




const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
