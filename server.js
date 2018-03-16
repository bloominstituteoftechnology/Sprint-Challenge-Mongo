const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const budgetRouter = require('./budget/budgetRouter');
const categoryRouter = require('/category/categoryRouter');
const expenseRouter = require('./expense/expenseRouter');

app.use(bodyParser.json());

app.use('/budget', budgetRouter);
app.use('/category', categoryRouter);
app.use('/expense', expenseRouter);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'API running' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
