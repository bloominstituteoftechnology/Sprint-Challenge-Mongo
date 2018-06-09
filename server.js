const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const db = require('./data/db.js');

db
  .connectTo('Budgets')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
