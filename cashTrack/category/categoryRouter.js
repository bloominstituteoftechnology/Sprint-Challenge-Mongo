const express = require('express');
const Category = require('./category.js');
const router = express.Router();

router
    .route('/')
        .get((req, res) => {
            Category
            .find({})
            .select({title: 1, _id: 1})
            .then(ans => {
                res.status(200).json(ans);
            })
            .catch(err => {
                res.status(500).json(err);
            })
        })
        .post((req, res) => {
            const newCat = new Category(req.body)
            newCat
            .save()
            .then(ans => {
                res.status(200).json(ans)
            })
            .catch(err => {
                res.status(500).json(err)
            })
        })

module.exports = router;