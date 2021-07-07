const express = require('express');
const router = express.Router();

const categoryModel = require('./categoryModel')

router
    .route('/')
        .post((req,res) => {
            const { title } = req.body;
            console.log({ title })
            const newCategory = new categoryModel({ title })
            newCategory.save()
                .then(item => {
                    res.status(201).json(item)
                })
                .catch(err => {
                    res.status(500).json({ error: "There was an error while saving the friend to the database."})
                })
        })

        .get((req, res) => {
          categoryModel.find({}, 'title -_id')
            .then(item => {
              res.status(200).json(item)
            })
            .catch(err => {
              res.status(500).json({ errorMessage: "The friends information could not be retrieved." })
            })
        })

module.exports = router;