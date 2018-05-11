const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const server = express();

// const router = require('router_path')

server.use(helmet());
server.use(express.json());

// server.use('/path', routers)

server.get('/', (req, res) => res.send("Server is running."));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
