const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

const budgetController = require("./budget/budgetController.js");
const expenseController = require("./expense/expenseController.js");
const categoryController = require("./category/categoryController.js");

const server = express();

// add your server code
server.use(cors());
server.use(helmet());
server.use(express.json());

server
  .get("/", (req, res) => res.send(`API Running on port: ${port}`))
  .listen(port, () => {
    console.log(`*** Server up and running on ${port} ***`);
  });

