const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose');

const budgetRouter = require('./budget/budgetRouter.js');

const server = express();
server.use(cors());
server.use(express.json());

// add your server code
server.use('/budget', budgetRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up and running' });
});


const port = process.env.PORT || 5000;

mongoose
  .connect('mongodb://localhost/budget')
  .then(() => console.log('\n=== connected to mongo ===\n'))
  .catch(err => console.log('error connecting to mongo'));

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
