const express = require('express')
const Category = require('./Category.js')

const router = express.Router()

// add endpoints here
router
  .route('/')
  .get((req, res) => {
    Category.find()
      .then(categories => {
        res.status(200).json(categories)
      })
      .catch(err => {
        res.status(500).json({ errorMessage: 'Error getting category', err })
      })
  })
  .post((req, res) => {
    const { body } = req
    const category = new Category(body.title)
    category.save()
      .then(category => {
        res.status(201).json(category)
      })
      .catch(err => {
        res.status(500).json({ errorMessage: 'Category item could not be posted', err })
      })
  })

router
  .route('/:id')
  .get((req, res) => {
    res.status(200).json({ route: '/api/category/' + req.params.id })
  })
  .delete((req, res) => {
    res.status(200).json({ status: '/api/category/' + req.params.id })
  })
  .put((req, res) => {
    res.status(200).json({ route: '/api/category/' + req.params.id })
  })

module.exports = router
