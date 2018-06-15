const express = require( 'express' );
const helmet = require( 'helmet' );


const budgetController = require( './budget/budgetController.js' );
const CategoryController = require( './budget/CategoryController.js' ).default;
const ExpenseController = require( './budget/ExpenseController.js' );

const server = express();

// add your server code
// db
//   .connectTo( 'budget' )
//   .then( () => console.log( '\n... API Connected to Database ...\n' ) )
//   .catch( err => console.log( '\n*** ERROR Connecting to Database ***\n', err ) );

server.use( helmet() );
server.use( express.json() );

server.use( '/api/budget', budgetController );
server.use( '/api/Category', CategoryController );
server.use( '/api/Expense', ExpenseController );


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
