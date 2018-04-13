const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

// add your server code
const budgetRouter = require('./Budget/BudgetRouter');

mongoose
  .connect('mongodb://localhost/finance')
  .then(() => console.log('\n=== connected to Mongo ===\n'))
  .catch(err => console.log('error connecting to DB'));

server.use(helmet);
server.use(express.json());
server.use(cors());

server.use('/api/budgets', budgetRouter);

server.get('/', (req, res) => res.send('API running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
