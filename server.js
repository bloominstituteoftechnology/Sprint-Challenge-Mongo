const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();

const Budget = require('./models/Budget.js');

server.use(cors());
server.use(helmet());
server.use(bodyParser.json());

server.post('/budget', (req, res) => {
  const budget = new Budget(req.body);
  budget
    .save()
    .then(budget => {
      res.json(budget);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

mongoose
  .connect('mongodb://localhost/budgets')
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.log('Connection to MongoDB failed'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
