const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const server = express();

mongoose
  .connect("mongodb://localhost:27017/trackerDB")
  .then(p => {
    console.log("connected to  trackerDB");
  })
  .catch(error => {
    console.log("connecting error ");
  });

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

const expensesRoute = require("./trackerDB/expensesRoute");
server.use("/api/expenses", expensesRoute);

const budgetsRoute = require("./trackerDB/budgetsRoute");
server.use("/api/budgets", budgetsRoute);

const categoriesRoute = require("./trackerDB/categoriesRoute");
server.use("/api/categories", categoriesRoute);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
