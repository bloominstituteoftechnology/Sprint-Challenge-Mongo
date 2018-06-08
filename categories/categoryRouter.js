const express = require('express')
const Category = require('./Category.js')
const router = express.Router()

router
    .route('/')
    .post((req, res) => {
        const { title } = req.body
        const newCategory = new Category({ title })
        if (!title) res.status(400).json({ userError: "Please provide a title" })
        else {
            newCategory.save()
                .then( category => {
                    res.status(201).json(category)
                })
                .catch( err => {
                    res.status(500).json({ error: err.message })
                })
        }
    })

    .get((req, res) => {
        Category.find()
            .select('title')
            .then( categories => {
                res.status(200).json(categories)
            })
            .catch( err => {
                res.status(500).json({ error: err.message })
            })
    })

module.exports = router