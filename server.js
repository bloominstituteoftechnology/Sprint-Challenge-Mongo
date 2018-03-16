const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(helmet());
server.use(bodyParser.json());

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
