const express = require('express');
const router = express.Router();
const model = require('./Budget');

router.post('/', (req, res) => {
  const newBudget = new model(req.body);
  newBudget.save()
  .then(response => res.send(response))
  .catch(err => console.log(err))
})


module.exports = router;
