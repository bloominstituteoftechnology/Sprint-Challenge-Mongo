const express = require('express');
const helmet = require('helmet');
const Budget = require('BudgetModel.js');
const Category = require('CategoryModel.js');


const server = express();
server.use(helmet());
server.use(express.json());


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
