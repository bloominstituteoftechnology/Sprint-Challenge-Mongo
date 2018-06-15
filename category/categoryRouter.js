const express = require('express');
const Budget = require('./Category.js');

const router = express.Router();

router 
.route('/')
.get((req, res) => {
    Category.find()
    .select('title')
    .then(categories => {
        res.status(200)
        res.json({ budgets })
    })
    .catch(error => {
        res.status(500).json(error)
    })
})
.post ((req, res) => {
   const {title} = req.body;
   const newCategory = new Category({title});

   if(!title){
       res.status(400).json(error)
   } else {
       newCategory 
       .save()
       .then(Category => {
           res.status(200)
           res.json({Category})
       })
       .catch(err => {
           res.status(500).json(error)
       })
   }
})
module.exports = router