const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const server = express();

// add your server code
const routes = require('./api/routes/routes.js');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget');

server.use(express.json());

routes(server);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
