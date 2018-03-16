const mongoose = require('mongoose');

const { server } = require('./server.js');

mongoose
    .connect('mongodb://localhost/BudgetTracker')
    .then(connect => {
        console.log('API Server running on port 8000');
    })
    .catch(error => {
        console.error('Database connection failed');
    });
