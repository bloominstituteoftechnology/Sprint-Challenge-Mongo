const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Expense = require('./Expense.js');

router
.route('/')
.post( (req,res)=>{
  const expense = new Expense(req.body);
  expense.save().then(savedExpense =>{
    res.status(200).json(savedExpense);
  })
  .catch(err=>{
    res.status(500).json(err);
  });
})
.get( (req,res)=>{
  Expense.find({})
  .populate('budget')
  .populate('category')
  .then(results=>{
    res.status(200).json(results);
  })
  .catch(err=>{
    res.status(500).json(err);
  });
});


module.exports = router;
