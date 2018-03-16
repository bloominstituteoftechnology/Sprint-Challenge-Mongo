const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const budgetRouter = require('./routes/budgetRouter');
const categoryRouter = require('./routes/categoryRouter');
const expenseRouter = require('./routes/expenseRouter');

const server = express();

server.use(helmet());
server.use(express.json());

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
