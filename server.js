const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');


const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
