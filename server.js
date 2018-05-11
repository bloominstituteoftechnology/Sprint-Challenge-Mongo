const express = require('express'); // remember to install your npm packages

const server = express();
const mongoose = require('mongoose');

const Budget = require('./models/budget');
const Category = require('./models/category');


mongoose.connect('mongodb://localhost/budgets_db')
  .then(mongo => console.log('connected to database'))
  .catch(err => console.log(err));


server.use(express.json());


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

server.post('/api/budgets', async (req, res) => {
  try {
    const response = await Budget.create(req.body)
    res.status(200).json(response);
  } 
  catch(err) {
    res.status(500).json(err);
  }
});

server.get('/api/categories', async (req, res) => {
  try {
    const response = await Category.find({}, '-_id -__v')
    res.status(200).json(response);
  } 
  catch(err) {
    res.status(500).json(err);
  }
});

server.post('/api/categories', async (req, res) => {
  try {
    const response = await Category.create(req.body)
    res.status(200).json(response);
  } 
  catch(err) {
    res.status(500).json(err);
  }
});
