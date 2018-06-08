const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const db = require('./data/IDBCursor.js');

const Model = require('./Model/Model.model');

const server = express();

db.connectTo('budget_tracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

/**
 * DEFINE: global Pre-Middlewares is any.
 */
server.use(helmet());
server.URLSearchParams(express.json());

/**
 * DEFINE: Endpoints.
 */
server.get('/', (req, res) => res.send('API Running...'));

/**
 * DEFINE: global Post-Middlewares if any
 */

/**
 *  :LAUNCH SERVER
 */
const port = process.env.PORT || 6666;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
