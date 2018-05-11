const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

router.get("/", (req, res) => {
    Budget.find().then(budgets => {
      res.status(200).json(budgets)
    }).catch(err => {
      res.status(500).json({
        errorMessage: "The budget information could not be retrieved."})
    })
  })
  
  router.get("/:id", (req, res) => {
    const id = req.params.id
    Budget.findById(id).then(budget => {
      res.status(200).json(budget)
    }).catch(err => {
      res.status(404).json({
        message: "A budget with that id could not be found"
      })
    })
  })

  
  router.post("/", (req, res) => {
    const budgetData = req.body;
    const budget = new Budget(budgetData);
      
    budget.save().then(budget => {
        res.status(200).json({
          message: "Successfuly saved new budget to database"
        })
      }).catch(err => {
        res.status(500).json({
          errorMessage: "There was an error while saving the budget to the database."
        })
      })
  })
  
  
  router.delete("/:id", (req, res) => {
    const id = req.params.id

    Budget.findByIdAndRemove(id).then(budget => {
        res.status(200).json({
            message: "budget has been deleted from the database"
        })
    }).catch(err => {
      res.status(500).json({
        errorMessage: "The budget could not be removed"
        })
    })
})
  
  
  router.put("/:id", (req, res)=> {
    const id = req.params.id;
    const input = req.body;
  
    Budget.findByIdAndUpdate(id, input).then(budget => {
        res.status(200).json({
            message: "budget has been succesfully updated"
          })
        }).catch(err => {
            res.status(500).json({
      errorMessage: "The budget information could not be modified."
    })
  })
});

module.exports = router