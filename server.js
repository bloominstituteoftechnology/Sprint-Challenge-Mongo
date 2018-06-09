const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose')


const server = express();

// add your server code

mongoose.connect('mongodb://localhost/budget')

const db = mongoose.connect('mongodb://localhost/budget')
.then(() => console.log('\n... API Connected to Database ...\n'))
.catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

const Budget = require('./budgetModel');
server.use(express.json());
// ENDPOINTS

// POST to '/budgets'
// Used to save a new budget to the database.

// Only worry about creating ONE budget for now.

server.post('/budgets', (req, res) => {
  const { title, budgetAmount } = req.body;
  const budget = new Budget(req.body);
  Budget.create(budget)
  .then(saveBudget => {
    res.status(201).json(saveBudget)
  })
  .catch(error => {
    res.send({ error: 'Error - unable to create new budget'});
  })
})




const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
