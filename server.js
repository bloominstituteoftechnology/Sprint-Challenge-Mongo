const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');
const server = express();

// add your server code

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(mongo => {
    console.log('\n.. API connected to Database! ...\n')
  })
  .catch(error => {
    console.log('\n.. Could not connect! ..\n')
  });


  server.use(helmet());
  server.use(express.json());

  //api server.use here
  server.use('api/budget')


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
