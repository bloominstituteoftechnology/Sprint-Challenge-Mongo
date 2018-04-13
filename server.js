const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('n\n=== connected to mongo ===\n'))
  .catch(err => console.log('error connecting to mongo'));

const budgetController = require('./budget/budgetController');
const categoryController = require('./category/categoryController');


const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running'});
});

server.use('/api/budget', budgetController);
server.use('/api/category', categoryController); 


// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
