const router = require('express').Router();
const mongoose = require('mongoose');
const Budget = require('./Budget.js');


router
    .route('/')
    .post(post)


  function post(req, res) {
      const budget = new Budget(req.body);

    //   if(!req.body) {
    //       res.status(400).json({ Message: 'Put in some fields if you want it to post.'})
    //   } else 
      budget
        .save()
        .then(stuff => {
            res.status(201).json(stuff);
        })
        .catch(err => {
            res.status(500).json({ message: 'something happened.'})
        });

  }  

module.exports = router;
