const express = require('express');
const Category = require('./Category.js');

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


module.exports = router;