const express = require('express'); // remember to install your npm packages
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();

// add your server code
const corsOptions = {
  origin: "*",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog-posts", { useMongoClient: true });

server.use(express.json());

server.use(cors());

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const routes = require("./routes/routes");
server.use('/', routes);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
