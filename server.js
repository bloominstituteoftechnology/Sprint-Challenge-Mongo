const express = require("express"); // remember to install your npm packages
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/budgetdb")
  .then(() => console.log("\n=== connected to  mongo ===\n"))
  .catch(err => console.log("error connecting to mongo"));

const budgetController = require("./budget/budgetController");
const categoryController = require("./category/categoryController");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.use("/api/budgets", budgetController);
server.use("/api/categories", categoryController);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
