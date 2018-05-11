const express = require('express');
const Budget = require('./budget')

const router = express.Router()

router.get('/', (req, res)=> {
    Budget.find().then(budgets => {
      res.status(200).json(budgets);
    })
    .catch(err=>{
        res.status(500).json({errorMessage: "The Budgets information could not be retrieved."})
    })
  })


router.post('/',(req,res)=>{


    const budget = new Budget(req.body);

    budget
      .save()
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: err });
      });

})

module.exports = router;