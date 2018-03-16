const express = require('express'); // remember to install your npm packages
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();

const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');

server.use(helmet());
server.use(bodyParser.json());

// add your server code

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);

mongoose
    .connect('mongodb://localhost/BudgetTracker')
    .then(connect => {
        console.log('API Server running on port 8000');
    })
    .catch(error => {
        console.error('Database connection failed');
    });

const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});

module.exports = { server };