const router = require('express').Router()
const Catergory = require('./catergory')


router
  .route('/')
  .get((req, res) => {
    Catergory
      .find()
      .then( catergory => {
          res.status(200).json(catergory)
      })
    })
  .post((req, res) => {
    const catergory = new Catergory(req.body)

    catergory
      .save()
      .then((Catergory) => {
        res.status(201).json(Catergory)
      })
  })

module.exports = router
