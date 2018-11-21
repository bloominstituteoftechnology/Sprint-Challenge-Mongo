const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// add your server code
const server = express();

const port = process.env.PORT || 5000;

const routes = require('./api/routers/Routes.js');
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/budget', { useMongoCliet: true });

server.use(bodyParser.json());

routes(server);

server.listen(port, () => {
  console.log(`Server doing the thang on ${port}`);
});
