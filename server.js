const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();
server.use(helmet());
server.use(express.json());

mongoose.connect('mongodb://localhost/')
  .then(connection => {
    console.log('Connected to MongoDB.');
  })
  .catch(err => {
    console.log('Failed to connect to MongoDB', err);
  })

  server.get('/', (req, res) => {
    res.status(200).json({ api: '!=== API IS RUNNING ===!' });
  });


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
