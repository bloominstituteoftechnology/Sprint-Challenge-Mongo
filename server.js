const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/Mongo-Sprint')
  .then(() => '\n\n===Connected to MongoDB===\n\n')
  .catch(() => 'There was an issue connecting to the DataBase.');


  const server = express();

// add your server code

server.use(helmet());
server.use(cors());
server.use(express.json());


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
