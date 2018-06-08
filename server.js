const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');

const server = express();
const budget = require('./routes/budgetRoute');

server.use(express.json());
server.use('/api/budgets', budget);

const port = process.env.PORT || 5001;

mongoose.connect('mongodb://localhost/sandbox', () => console.log('Good'));

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
