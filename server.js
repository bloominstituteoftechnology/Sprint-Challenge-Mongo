const express = require('express'); // remember to install your npm packages
const helmet = require("helmet");
const server = express();

server.use(helmet());
server.use(express());

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
