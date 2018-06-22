const express = require('express'); // remember to install your npm packages

const server = express();
const port = process.env.PORT || 8080;

// add your server code

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
