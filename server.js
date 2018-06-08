const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const server = express();

const db = require('./data/db.js');
const budgetRouter = require('./routes/budgetRouter.js');
const expenseRouter = require('./routes/expenseRouter.js');
const categoryRouter = require('./routes/categoryRouter.js');

// middlewarez
server.use(helmet());
server.use(express.json());

// add your server code



server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});