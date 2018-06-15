const express = require('express');
const router = express.Router();
const Category = require('./models/Category.js');

router
  .get('/', (req, res) => {
    Category
      .find()
      .then(response => {
        res.send(response)
      })
      .catch(error => res.send(error));
  })
  .post('/', (req, res) => {
    const { title  } = req.body;
    // filling the budget form
    const newCategory = new Category({ title });
    
    newCategory
      .save()
      .then(response => {
        res.send(response)
      })
      .catch(error => res.send(error));
  })
  .delete('/:id', (req, res) => {
    const { id } = req.params;
    Category
     .remove({_id: id})
     .then(response => {
      res.send(response)
    })
    .catch(error => res.send(error));
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    Category
     .findById(id)
     .then(response => {
      res.send(response)
    })
    .catch(error => res.send(error));
  })

module.exports = router;