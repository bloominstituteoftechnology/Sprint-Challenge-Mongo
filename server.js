const express = require('express'); 
const server = express();
const mongoose = require('mongoose');

//==============================
//      SERVER INFORMATION
//==============================

mongoose
  .connect('mongodb://localhost/budget')
  .then(() => {
    server.listen(3000, () => console.log('API Server running on port 3000'));
  })
  .catch(error => {
    console.error('database connection failed');
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
