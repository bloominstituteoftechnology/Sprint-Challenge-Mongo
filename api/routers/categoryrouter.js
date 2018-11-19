const express = require('express');
const Category = require('./Category.js');
const Expense = require('../expenses/Expense.js');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

router
  .route('/')
  .post((req, res) => {
    const { title } = req.body;
    const newCategory = new Category({ title });
    if (!title) {
      res.status(400).json({
        userError: 'Please add title.'
      });
    } else {
      newCategory
        .save()
        .then(category => {
          res.status(201).json(category);
        })
        .catch(err => {
          res.status(500).json({
            error: err.message
          });
        });
    }
  })

  .get((req, res) => {
    Category.find()
      .select('title')
      .then(categories => {
        res.status(201).json(categories);
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        });
      });
  });

router
  .route('/:id')
  .get((req, res) => {
    const { id } = rew.params
    const newCategory = { title } = req.body
    Category.findByIdAndUpdate(id, newCategory, { new: true })
      .select('title -_id')
      .then( category => {
        res.status(200).json(category)
      })
      .catch( err => {
        res.status(500).json ({
          error: err.message
        })
      })
  })

  .delete((req, res) => {
    const { id } = req.params
    Category.findByIdAndRemove(id)
      .then( category => {
        res.status(200).json(category)
      })
      .catch( err => {
        res.status(500).json({
          error: err.message 
        })
      })
  })
  
module.exports = router;
