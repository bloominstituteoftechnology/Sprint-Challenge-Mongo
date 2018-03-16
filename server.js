const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const helmet = require('helmet');

const server = express();

// add your server code

mongoose
  .connect('mongodb://localhost/sprint-mongo')
  .then( () => console.log('Connection to MongoDB successful') )
  .catch( err => console.log('Error connecting to MongoDB') )

server.use(helmet());
server.use(express.json());


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
