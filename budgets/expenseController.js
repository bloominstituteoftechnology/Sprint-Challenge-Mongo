const router = require('express').Router();
const Expense = require('../Model/Model.js');

router
    .route('/')
    .get((req, res) => {
        Expense.find({})
          .then(expense => {
            res.status(200).json(expense);
          })
          .catch(err => {
            res.status(500).json({err: 'The expense information could not be retrieved'});
          });
      })
    .post((req, res) => {
        const {amount, description} = req.body
        if(!description || !amount){
            res.status(400).json({err: 'Please provide description, amount for the expense'})
        }
            
        const expense = new Expense ({description, amount});
        expense
            .save()
            .then(savedexpense => {
            res.status(201).json(savedexpense);
            })
            .catch(err => res.status(500).json({err:'There was an error while saving the expense to the database.'}));
    })

    .put((req, res) =>{
        const {amount, description} = req.body;
        Expense
            .findByIdAndUpdate(req.params.id, req.body)
            .then(response => {
            if (response===null){
                res.status(404).json({ message: 'not found'});
            }
            else{
                res.status(200).json(response);
            }
            })
            .catch(err => {
            if (err.name==='CastError'){
                res.status(400).json({
                message: 'The ID provided is invalid. Please try again.',
                });
            }
            else {
                res
                .status(500)
                .json({ errorMessage: 'The expense could not be removed', err});
            }
        })
    })
    .delete((req, res) =>{
        const {id} = req.params;
        Expense.findByIdAndRemove(id)
            .then(response => {
            if (response===null){
                res.status(404).json({message: 'not found'});
            }
            else{
                res.status(200).json(response);
            }
            })
    .catch(err => {
        res.status(500).json({err: 'The expense information could not be retrieved'});
    });
});



module.exports = router;