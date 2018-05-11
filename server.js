const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");
const db = require("./data/db.js");

const server = express();

// add your server code
db
  .connectTo("budget")
  .then(() => console.log("\n... API Connected to Database ...\n"))
  .catch(err => console.log("\n*** ERROR Connecting to Database ***\n", err));

server.use(helmet());
server.use(express.json());

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
