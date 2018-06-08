const express = require('express');
const router = express.Router();

const Category = require('./category.js');


router
    .route('/')
    .get((req,res)=>{
        Category.find()
            .then(response => {
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({ errorMessage: err })
            })
    })
    

    .post((req, res) => {
        const { title } = req.body;
        const newCategory = new Category({ title });
        newCategory
            .save()
            .then(category => {
                res.status(201).json({ category })
            })
            .catch(err => {
                res.status(500).json({ errorMessage: err })
            })
    })

module.exports = router;