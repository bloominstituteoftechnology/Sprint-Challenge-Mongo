const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const db = require('./data/db.js');
//bring in all routers
const budgetRouter = require('./budget/budgetRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');
const categoryRouter = require('./category/categoryRouter.js');


const server = express();

// add your server code
db
  .connectTo('starwars')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());

server.use('/api/characters', charactersRouter);
server.use('/api/films', filmsRouter);
server.use('/api/species', speciesRouter);
server.use('/api/starships', starshipsRouter);
server.use('/api/vehicles', vehiclesRouter);
server.use('/api/planets', planetsRouter);

server.get('/', (req, res) => res.send('API Running...'));


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
