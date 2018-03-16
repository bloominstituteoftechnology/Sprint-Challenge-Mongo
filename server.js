const express = require('express');
const helmet = require('helmet');
const server = express();
const db = require('./db');
const budgetRoutes = require('./api/routes/budgetRoutes');
const categoryRoutes = require('./api/routes/categoryRoutes');
const expenseRoutes = require('./api/routes/expenseRoutes');

server.use(helmet());
server.use(express.json());

server.use('/api/budget', budgetRoutes);
server.use('/api/category', categoryRoutes);
server.use('/api/expense', expenseRoutes);

db.connectTo('btracker')
    .then(() => console.log('\n... API Connected to Database ...\n'))
    .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});
