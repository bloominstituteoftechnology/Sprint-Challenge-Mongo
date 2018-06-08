const express = require('express'); 
const helmet = require('helmet');
const mongoose = require('mongoose');
// remember to bring in my controllers
const localHost = 'localhost:27017';
const database = 'budgetdb';

const server = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(`mongodb://${localHost}/${database}`)
  .then(response => {
      console.log("Connection Successful")
  })
  .catch(error => {
      console.log("Connection Failed")
  });

server.use(helmet());
server.use(express.json());
// server.use('api/PLACEHOLDER', PLACEHOLDER_controller)

server.get('/', (req, res) => {
  res.status(200).json({ API: 'running' });
});

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
