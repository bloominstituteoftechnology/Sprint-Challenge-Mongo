const mongoose = require('mongoose')
const server = require('./server.js')

mongoose
  .connect('mongodb://localhost/sprint')
  .then(() => {
    server.listen(3000, () => console.log('API Server running on port 3000'))
  })
  .catch(error => {
    console.error(error)
  })