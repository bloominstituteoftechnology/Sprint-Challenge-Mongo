const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const server = express();


// add your server code
server.use(helmet());
server.use(express.json());


server.get('/', (req, res) => res.send ('API Running...'));


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
