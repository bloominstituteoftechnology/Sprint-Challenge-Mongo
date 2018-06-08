const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

//connecting to mongo
mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(mongo => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log('Error connecting to database', err)
  });

const budgetController = require('./budget/budgetController');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.use('/api/budget', budgetController);

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise; // configure the mongoose promise system to use Native JS Promises
mongoose.connect(
  'mongodb://localhost/dbBudget',
  {},
  err => {
    // declare where we're going to connect this is the equivilent of using `use dbBears` in the mongo shell
    if (err) console.log(err);
    console.log('Mongoose connected us to our DB');
  }
);


server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));