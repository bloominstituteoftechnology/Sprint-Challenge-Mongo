const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

// add your server code

server.use(helmet());
server.use(cors())
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' })
});

//MONGOOSE
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(mongo => {
    console.log('Mongoose connected us to our DB');
  })
  .catch(err => {
    console.log('Database connection failed', err);
  })

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
