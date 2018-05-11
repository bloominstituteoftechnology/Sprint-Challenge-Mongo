const express = require('express');

const mongoose = require('mongoose');


mongoose
  .connect('mongodb://localhost/savemoneys')
  .then(() => console.log(' > API dancing with Database '))
  .catch(err => console.log('** :( ERROR Connecting to Database **', err));

const server = express();


server.use(express.json());


// routes will go here

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(` > Server swerving on ${port}  `);
});
