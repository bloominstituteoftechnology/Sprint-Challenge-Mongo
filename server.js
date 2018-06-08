const server = require('express')();
const dbConnection = require('./dbConnection');
const port = process.env.PORT || 5000;

server.use(require('helmet')());
server.use(require('cors')());
server.use(require('express').json());

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
