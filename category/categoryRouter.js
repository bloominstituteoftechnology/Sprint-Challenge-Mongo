const express = require('express')

const Category = require('./Category.js')

const router = express.Router()

/* ### `POST to '/categories'`

* to `create` a category you should have a `'post'` method that stores the
  category information.
* you can write a `getter` `'get'` method that simply returns all the
  categories. Filter out any un-useful information here, meaning we just want
  the title of the categories.
* create a minimum of 4 categories so that when you create your expenses, youcan assign where they go!
* example of categories could be: `Food/Dining` `Gas/Auto` `Date Nights``Mortgage` */

router
  .route('/')
  .get((req, res) => {
    Category.find()
      .then(category => res.status(200).json(category))
      .catch(err => res.status(500).json({ error: err.message }))
  })
  .post((req, res) => {
    const input = ({ title } = req.body)
    if (title === '') {
      res.status(404).json({ errorMessage: 'Category title cannot be blank' })
      return
    }
    const newCategory = new Category(input)
    newCategory
      .save(input)
      .then(savedCategory => res.status(200).json(savedCategory))
      .catch(err => res.status(500).json({ error: err.message }))
  })
module.exports = router
