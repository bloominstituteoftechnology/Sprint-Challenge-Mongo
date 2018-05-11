const express = require("express"); // remember to install your npm packages

const db = require('./data/db');

const server = express();

// add your server code
db
  .connectTo("budgetTracker")
  .then(() => console.log("\n=== API Connected to Budget DB ===\n"))
  .catch(error => console.log("\n*** Error Connecting to Budget DB!!! ***\n"));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
