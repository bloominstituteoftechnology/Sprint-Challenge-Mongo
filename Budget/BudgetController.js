const router = require('express').Router()
const Budget = require('./budget')


router
  .route('/')
  .get((req, res) => {
    Budget
    .find()
    .then((budget) => {
        res.status(200).json(budget)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  })
  .post((req, res) => {
    const budget = new Budget(req.body)

    budget
      .save()
      .then((Budget) => {
        res.status(201).json(Budget)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  })

module.exports = router
