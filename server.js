const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');


// add your server code
mongoose
.connect('mongodb://localhost/budgetdb')
.then(mongo => {
  console.log('connected to database');
})
.catch(err => {
  console.log('Error connecting to database', err);
});

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', function(req, res) {
  res.status(200).json({ api: 'running' });
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
