const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

// add your server code

server.use(express.json());
server.use(cors());
server.use(helmet());

const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost/budget");
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
