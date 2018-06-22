const express = require('express'); // remember to install your npm packages
const helmet = require( 'helmet' );
const cors = require( 'cors' );

const db = require( './database/db' )
const budgetRouter = require('./database/routes/budgetRouter')
const categoryRouter = require( './database/routes/categoryRouter' )
const expenseRouter = require( './database/routes/expenseRouter' )

const server = express();
const port = process.env.PORT || 8080;

db
  .connectTo( 'lambdabudgetapp' )
  .then( () => console.log( '\n... API Connected to Database ...\n' ) )
  .catch( err => console.log( '\n*** ERROR Connecting to Database ***\n', err ) );

// add your server code
server.use( helmet() );
server.use( express.json() );

server.use( '/api/budget', budgetRouter );
server.use( '/api/category', categoryRouter );
server.use( '/api/expense', expenseRouter );


server.get( '/', ( req, res ) => res.send( 'API Running...' ) );

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
