const express = require('express');

const Category = require('./Category.js');

const router = require('express').Router();

router
    .route('/')
    .get(get)
    .post(post)


function get(req, res) {
    Category.find()
    .select('category')
    .then(category => {
        res.status(200).json(category);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}

function post(req, res) {
    const categoryInfo = req.body;

    const category = new Category(categoryInfo)

    category
        .save()
        .then(category => {
            Character.find().then(category => {
                res.status(200).json(category);
            });
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = router;