const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');

const server = express();
const routes = require('./routes.js');

// add your server code
server.use(express.json())
server.use('./api/budgets', routes);
server.use('./api/categories', routes);
server.use('./api/expenses', routes);



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
