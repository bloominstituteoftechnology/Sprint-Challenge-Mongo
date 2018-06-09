const express = require('express');
const Expense = require('./Expense.js');

const router = express.Router();

router 
  .route('/')
    .get((req, res) => {
      Expense.find({}, '-_id -__v')
        .populate('budget', '-_id -__v')
        .populate('category', '-_id -__v -expenses')
        .then(exp => {
          res.json(exp)
        })
        .catch(e => {
          res.status(500).json({error: e.message})
        })
    })

    .post((req, res) => {
      const exp = ({amount, description, budget, category} = req.body);
      const newExp = new Expense(exp)
      
      newExp.save()
        .then(c => res.status(201).json(c))
        .catch(e => res.status(500).json({ error: e.message}))
    })

router  
  .route('/total')
    .get((req, res) =>{
      Expense.aggregate([        
        { $lookup: { from: 'categories', localField:'category', foreignField: '_id', as: 'cat'}},
        { $unwind: '$cat'},
        { $project: {category:1, amount: 1, cat:'$cat.title' }},
        { $group: { _id: '$cat', total: { $sum: '$amount' }}},
      ])
      
      // .populate('_id:')
      .then(tot => {
        // console.log(tot)
        res.json(tot)
      })
      .catch(err => res.json({error: err.message}))
    })
module.exports = router;

