const express = require('express');
const Category = require('./Category.js');
const Expense = require('../Expense/Expense.js')
const router = express.Router();

router 
  .route('/')
    .get((req, res) => {
      Category.find({}, '-_id -__v')
        .then(c => {
          res.json(c)
        })
        .catch(e => {
          res.status(500).json({error: e.message})
        })
    })

    .post((req, res) => {
      const cat = ({title} = req.body);
      const newCat = new Category(cat)
      
      newCat.save()
        .then(c => res.status(201).json(c))
        .catch(e => res.status(500).json({ error: e.message}))
    })

router
    .route('/:id')
      .get(((req, res) => {
        const { id } = req.params;
        Category.findById(id)
          .then (c => {
            Expense.find({category: c._id},'-_id description amount')
            .then(exp => {
              // console.log(exp);
              c['expenses'] = exp;
              res.json(c);
            })
            .catch(e => res.status(500).json({ error: e.message }))
          })
          .catch(e => res.status(500).json({ error: e.message }))
      }))
module.exports = router;