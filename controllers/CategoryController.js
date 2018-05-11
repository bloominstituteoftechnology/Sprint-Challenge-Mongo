const express = require('express');
const Category = require('../models/Category');
const categoryController = express.Router();


categoryController
    .route('/')
    .get((req, res) => {

        Category.find()
            .then(categories => {
                if (!categories) {
                    res.status(400).send({message: 'No categories have been created.'})
                }
                else {
                    res.status(201).send(categories)
                }
            })
            .catch(error => {
                res.status(500).send({message: 'Error getting categories from the database'})
            })
    })
    .post((req, res) => {
        const category = new Category(req.body);
        category
            .save()
            .then(newCategory => {
                if(newCategory === null) {
                    res.status(404).json(newCategory);
                } else {
                    res.status(201).json(newCategory);
                }
            })
            .catch(err => res.status(500).json(err));
    });
module.exports = categoryController;