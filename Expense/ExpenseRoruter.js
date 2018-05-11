const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();

router.get("/", (req, res) => {
    Expense.find()
    .populate("budget category")
    .then(expenses => {
      res.status(200).json(expenses)
    }).catch(err => {
      res.status(500).json({
        errorMessage: "The expense information could not be retrieved."})
    })
  })
  
  router.get("/:id", (req, res) => {
    const id = req.params.id
    Expense.findById(id).then(expense => {
      res.status(200).json(expense)
    }).catch(err => {
      res.status(404).json({
        message: "A expense with that id could not be found"
      })
    })
  })

  
  router.post("/", (req, res) => {
    const expenseData = req.body;
    const expense = new Expense(expenseData);
      
    expense.save().then(expense => {
        res.status(200).json({
          message: "Successfuly saved new expense to database"
        })
      }).catch(err => {
        res.status(500).json({
          errorMessage: "There was an error while saving the expense to the database."
        })
      })
  })
  
  
  router.delete("/:id", (req, res) => {
    const id = req.params.id

    Expense.findByIdAndRemove(id).then(expense => {
        res.status(200).json({
            message: "expense has been deleted from the database"
        })
    }).catch(err => {
      res.status(500).json({
        errorMessage: "The expense could not be removed"
        })
    })
})
  
  
  router.put("/:id", (req, res)=> {
    const id = req.params.id;
    const input = req.body;
  
    Expense.findByIdAndUpdate(id, input).then(expense => {
        res.status(200).json({
            message: "expense has been succesfully updated"
          })
        }).catch(err => {
            res.status(500).json({
      errorMessage: "The expense information could not be modified."
    })
  })
});

module.exports = router