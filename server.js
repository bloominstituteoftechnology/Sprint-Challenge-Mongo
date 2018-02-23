const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const server = express();

const port = process.env.PORT || 3000;

const routes = require('./api/routes/routes');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

server.use(bodyParser.json());

routes(server);

server.get('/', (req, res)=> {
  res.status(200).json({ api: 'The API rises from its slumber' });
});

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
