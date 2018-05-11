const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const app = express();

const BudgetController = require('./Budget/BudgetController')
const CatergoryController = require('./Catergory/CatergoryController')
const ExpenseController = require('./Expense/ExpenseController')
// add your server code
app.use(express.json());

mongoose
  .connect('mongodb://localhost/budgetdbs')
  .then(mongo =>{ console.log('connected to database')}
  )
  .catch(err => {
    console.log('Error connecting to database', err)
  })

app.use('/api/budget/', BudgetController)
app.use('/api/catergory', CatergoryController)
app.use('/api/expense', ExpenseController)

app.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
