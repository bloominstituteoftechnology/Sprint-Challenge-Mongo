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

})
.get((req, res) => {
    
    let query = Category.find();
    query.select({ title: 1, _id: -1 }).then(categories => {
        res.status(200).json(categories)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


module.exports = router;