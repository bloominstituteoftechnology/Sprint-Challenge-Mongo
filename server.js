const express = require('express'); // remember to install your npm packages
const server = express();
const db = require('./db');

// add your server code

db.connectTo('btracker')
    .then(() => console.log('\n... API Connected to Database ...\n'))
    .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});
