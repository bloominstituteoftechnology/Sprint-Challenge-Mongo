const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const server = express();

// add your server code
server.use(helmet());
server.use(bodyParser.json);



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
