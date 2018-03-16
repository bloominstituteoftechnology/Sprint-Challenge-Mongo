const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const server = express();
server.use(express.json());
server.use(helmet());

// add your server code

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
