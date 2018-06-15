const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/budgetdb')
  .then(mongo =>{
    console.log("connected to database");
  })
  .catch(err =>{
    console.log("Error connecting to database", err);
  });

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const budgetRouter = require('./budget/budgetRouter');

server.get('/', (req, res) =>{
  res.status(200).json({api:'running successfully'});
})

server.use('/api/budget', budgetRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\nServer up and running on ${port}\n`);
});
