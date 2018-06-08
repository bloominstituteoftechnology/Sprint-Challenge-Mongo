const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/dbBears')
  .then(mongo => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log('Error connecting to database', err);
  })

const budgetController = require('./budget/budgetRouter.js');



const server = express();

// add your server code

server.use(helmet());
server.use(express.json());

server.get('/', function(req, res) {
  res.status(200).json({api: 'running'});
});

server.use('/api/budgets', budgetController);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

// BUDGET shape
// {
//   _id: ObjectId('507f1f77bcf86cd799439011'),
//   title: 'Budget',
//   budgetAmount: 3000,
// }

// EXPENSE
// {
//   _id: ObjectId('503c2b66bcf86cs793443564'),
//   amount: 35,
//   description: 'potatoes',
//   budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
//   category: ObjectId('543d2c72gsb23cd657438921') // Groceries
// }

//CATEGORY
// {
//   _id: ObjectId('543d2c72gsb23cd657438921'),
//   title: 'Groceries',
// }

//workflow
// connect to api to mongo
// define schema
// compile the schema into a modal
// create mongoose document by instantiating (calling new on) the modal
// use the mongoose modal to interact with the document

// db.shutdownServer()


