const express = require('express')

const Category = require('./category.js')

const router = express.Router();

router
.route('/')
.post((req, res) => {
    const { body } = req;

    const category = new Category(body);

    category.save()
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch(err => {
            res.status(500).json({
                error: 'error with categories'
            })
        })

    
    res.status(200).json({success: 'server starting category'})




})


module.exports = router;