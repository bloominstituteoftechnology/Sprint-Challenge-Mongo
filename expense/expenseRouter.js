const express = require('express');
const router = express.Router();

const model = require('./Expense');

router.get('/', (req,res) => {
  model.find()
  .populate("budget category")
  .then(expns => res.json(expns))
  .catch(err => console.log(err))
})

router.post('/', (req,res) => {
  const newExpense = new model(req.body);

  newExpense.save()
  .then(expns => res.json(expns))
  .catch(err => console.log(err))
})



module.exports = router;
