const router = require('express').Router()
const Expense = require('./expense')

router
  .route('/')
    .get((req, res) =>{
      Expense
        .find({})
        .populate('budget catergory')
        .then((expense) => {
          res.status(200)
        })
        .catch(err => {
          res.status(500).json(err)
        })
    })

module.exports = router
