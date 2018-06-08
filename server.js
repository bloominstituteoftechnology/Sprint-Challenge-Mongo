const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const db = require('./data/db.js'); //Creates a db server connection promise
//Create API sub-applications routers here
// const modelsRouter = require('./models/modelsRouter.js');

const server = express();

//connects to the database
db
  .connectTo()
  .then()
  .catch()

server.use(helmet());
server.use(express.json());

// Create API routes
// server.use('route', subAPIRouter);
server.get('/', (req, res) => res.send('API Running...')); //Main route


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
