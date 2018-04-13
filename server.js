// bring in express, morgan, helmet, cors and mongoose
const express = require(`express`);
const morgan = require(`morgan`);
const helmet = require(`helmet`);
const cors = require(`helmet`);

const db = require('./data/db.js');

// bring in the config file;
const config = require('./api/config.js');

// create a server
const server = express();

// to enable json parsing
server.use(express.json());

// bring in mongoose
db
  .connectTo(`budgetdb`)
  .then(() => console.log(`\n... API Connected to Database ...\n`))
  .catch(err => console.log(`\n*** ERROR Connecting to Database ***\n`, err));

//logging, TBD: create morganOptions and pass it in, instead
server.use(morgan(`dev`));

//security
server.use(helmet());

//cross origin request sharing permissions
const corsOptions = {
  origin: `*`,
  methods: `GET, HEAD, PUT, PATCH, POST, DELETE`,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
server.use(cors(corsOptions));

// root get request
server.get(`/`, (req, res) =>
  // send a json response
  res.json({ api: `API is running successfully!!` })
);

// define a port to use
const port = config.port || 5000;

server.listen(port, () => {
  console.log(`\n\nServer up and running on ${port}`);
});
