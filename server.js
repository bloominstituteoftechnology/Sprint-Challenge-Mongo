const express = require('express'); // remember to install your npm packages
const server = express();
const helmet = require("helmet");
const db = require("./db.js");

// add your server code
db.connectTo("budgetTracker")
  .then(() => console.log("\n... API Connected to Database ...\n"))
  .catch(err => console.log("\n*** ERROR Connecting to Database ***\n", err));

server.use(helmet());
server.use(express.json());

const budgetController = require('./budgets/budgetsController.js')

server.use('/budgets', budgetController)


server.get("/", (req, res) => res.send("API Running..."));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
