const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const server = express();

/* --- Middleware --- */
server.use(helmet());
server.use(cors());
server.use(express.json());

/* --- Endpoints --- */

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
