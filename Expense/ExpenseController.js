const router = require('express').Router()
const Expense = require('./expense')

router
  .route('/')
    .get((req, res) => {

        Expense
        .find()
            .populate('budget')
            .populate('category')
            .then(expenses => {
                res.status(200).json(expenses)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    })
    .post((req, res) => {

      const expense = new Expense(req.body)
        expense
          .save()
          .then(Expense => {
            res.status(201).json(Expense)
          })
          .catch(error => {
            res.status(500).json(error)
          })
      })
  

module.exports = router
