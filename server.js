const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');

const server = express();

// add your server code

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Running' });
});

mongoose
  .connect('mongodb://localhost/budgettracker')
  .then(connetion => console.log('Connected to Mongo'))
  .catch(error => console.log('Error Connecting to Mongo'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
