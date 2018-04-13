const router = require('express').Router();
const Budget = require('../Model/Model.js');

router
    .route('/')
    .get((req, res) => {
        Budget.find({})
          .then(budget => {
            res.status(200).json(budget);
          })
          .catch(err => {
            res.status(500).json({err: 'The Budget information could not be retrieved'});
          });
      })
    .post((req, res) => {
        const {description, amount} = req.body;
        if(!description || !amount){
            res.status(400).json({err: 'Please provide description, amount for the Budget'})
        }
            
        const budget = new Budget ({description, amount});
        budget
            .save()
            .then(savedBudget => {
            res.status(201).json(savedBudget);
            })
            .catch(err => res.status(500).json({err:'There was an error while saving the Budget to the database.'}));
    })
router
    .route('/:id')
    .get((req, res) => {
        Friend.findById(req.params.id)
        .then(friends => {
            res.status(200).json(friends);
        })
        .catch(err => {
            res.status(500).json({err: 'The friends information could not be retrieved'});
        });
    })
    .put((req, res) =>{
        const {amount, description} = req.body;
        Budget
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
                .json({ errorMessage: 'The Budget could not be removed', err});
            }
        })
    })
    .delete((req, res) =>{
        const {id} = req.params;
        Budget.findByIdAndRemove(id)
            .then(response => {
            if (response===null){
                res.status(404).json({message: 'not found'});
            }
            else{
                res.status(200).json(response);
            }
            })
    .catch(err => {
        res.status(500).json({err: 'The Budget information could not be retrieved'});
    });
});



module.exports = router;