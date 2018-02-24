const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const server = express();

const port = process.env.PORT || 4000;

const routes = require('./api/routes/routes');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

server.use(bodyParser.json());

routes(server);

server.listen(port, () => {
	console.log(`Server up and running on ${port}`);
});

// Set up the connection to the database
// add a promise to handle errors connecting
