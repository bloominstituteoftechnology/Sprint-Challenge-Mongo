const express = require("express"); // remember to install your npm packages
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());

// add your server code

server.get("/", (req, res, next) => {
  res.send("API running");
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
