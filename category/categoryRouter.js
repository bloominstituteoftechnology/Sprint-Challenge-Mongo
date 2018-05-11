const express = require('express');
const model = require('./Category');
const router = express.Router();




router.post('/', (req,res) => {
  const newCategory = new model(req.body);
  newCategory.save()
  .then(category => res.send(category))
  .catch(err => console.log(err))
})


module.exports = router;
