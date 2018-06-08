const router = require('express').Router();

const Category = require('./category');

router
    .route('/')
    .get((req, res) => {
        Category.find()
        then(category => {
            res.status(200).json(category);
        })
            .catch(err => {
                res.status(500).json({ error: err.message });
        })
    })

module.exports = router;