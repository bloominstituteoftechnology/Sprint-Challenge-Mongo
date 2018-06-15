const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const server = express();
const cors = require('cors');
// const db = require('./db.js')
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => res.send('MONGO sprint API Running on PORT 5000...'));

// db
//   .connectTo('sprintMongo')
//   .then(() => console.log('\n... API Connected to Database ...\n'))
//   .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

// add your server code


//ROUTER
const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

//PORT
server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
