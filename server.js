const express = require('express'); // remember to install your npm packages

const server = express();

// add your server code



server.use(express.json());
mongoose.connect('mongodb://localhost/mdb-stretch')
  .then(res => {
    console.log('connected to mongo')
  })
  .catch(err => {
    console.log('error connecting to mongo');
  })

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
