const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const server = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const routes = require('./api/routes/routes');
routes(server);

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
