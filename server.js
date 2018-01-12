const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const server = express();

const routes = require('./api/routes/routes');

const port = process.env.PORT || 3000;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

server.use(bodyParser.json());

routes(server);

server.listen(port, () => {
  console.log(`Server up and running on http://localhost:${ port }`);
});
