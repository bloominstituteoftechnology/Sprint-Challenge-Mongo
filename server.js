const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const app = express();

// add your server code

mongoose
  .connect('mongodb://localhost/BudgetTrackerDb')
  .then(mongo =>{ console.log('connected to database')}
  )
  .catch(err => {
    console.log('Error connecting to database', err)
  })

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
