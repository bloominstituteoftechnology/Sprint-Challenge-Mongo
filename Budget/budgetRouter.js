const express = require('express');
const Budget = require('./Budget.js');

const router = express.Router();

router 
  .route('/')
    .get((req, res) => {
      Budget.find()
        .then(b => {
          res.json("its working... ITS WORKING")
        })
    })

    .post((req, res) => {
      const bud = ({title} = req.body);
      const newBudget = new Budget(bud)
      console.log(newBudget)
      newBudget.save()
        .then(b => res.status(201).json(b))
        .catch(e => res.status(500).json({ error: e.message}))
    })



module.exports = router;