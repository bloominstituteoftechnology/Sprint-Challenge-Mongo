const express = require('express');
const Expense = require('./expense')

const router = express.Router()


router.get('/', (req, res)=> {
let query = Expense.find().sort('amount')
    .populate('budgets', 'title budgetAmount')
    .populate('categorys', 'title')
   query.then(response => {
      res.status(200).json(response);
    })
    .catch(err=>{
        res.status(500).json({errorMessage: "The expense information could not be retrieved."})
    })
  })

 
router.post('/',(req,res)=>{


    const expense = new Expense(req.body);

    expense
      .save()
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: err });
      });

})


module.exports = router;