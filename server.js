const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

const budgetController = require('./budget/budgetController');

const server = express();

// add your server code
server.use(helmet());
server.use(express.json());

// root route
server.get('/', (req, res) => {
  res.status(200).json({api: 'running'})
});

// GET /api/budget for all routes and route for root route to return budgetController
server.use('/api/budget', budgetController)


// connecting mongoose to local host
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budgetdb', {}, (err) => {
  if (err) console.log(err);
  console.log('Mongoose connected to Database server')
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
