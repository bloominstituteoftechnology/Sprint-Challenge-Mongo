const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Category = require('./Category.js');

router
.route('/')
.post( (req,res)=>{
  const category = new Category(req.body);
  category.save().then(savedCategory =>{
    res.status(200).json(savedCategory);
  })
  .catch(err=>{
    res.status(500).json(err);
  });
})
.get( (req,res)=>{
  Category.find({})
  .then(result=>{
    result = result.map(e=>{
      return e.title;
    });
    res.status(200).json(result);
  })
  .catch(err=>{
    res.status(500).json(err);
  });
});


module.exports = router;
