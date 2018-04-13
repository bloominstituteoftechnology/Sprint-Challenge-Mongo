const router = require('express').Router();
const Category = require('../Model/Model.js');

router
    .route('/')
    .get((req, res) => {
        Category.find({})
          .then(category => {
            res.status(200).json(category);
          })
          .catch(err => {
            res.status(500).json({err: 'The category information could not be retrieved'});
          });
      })
    .post((req, res) => {
        const {amount, description} = req.body
        if(!description || !amount){
            res.status(400).json({err: 'Please provide description, amount for the category'})
        }
            
        const category = new Category ({description, amount});
        category
            .save()
            .then(savedCategory => {
            res.status(201).json(savedCategory);
            })
            .catch(err => res.status(500).json({err:'There was an error while saving the category to the database.'}));
    })

    .put((req, res) =>{
        const {amount, description} = req.body;
        Category
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
                .json({ errorMessage: 'The category could not be removed', err});
            }
        })
    })
    .delete((req, res) =>{
        const {id} = req.params;
        Category.findByIdAndRemove(id)
            .then(response => {
            if (response===null){
                res.status(404).json({message: 'not found'});
            }
            else{
                res.status(200).json(response);
            }
            })
    .catch(err => {
        res.status(500).json({err: 'The category information could not be retrieved'});
    });
});



module.exports = router;