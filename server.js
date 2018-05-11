const express = require('express'); // remember to install your npm packages

const server = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/budgets_db')
  .then(mongo => console.log('connected to database'))
  .catch(err => console.log(err));


server.use(express.json());

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
