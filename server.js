const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');

mongoose
  .connect('mongodb://localhost/budgettracker')
  .then(() => console.log(`\n=== connected to mongo ===\n`))
  .catch(err => res.status(500).json(err));

const server = express();

// add your server code
server.use(morgan('dev'));
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
