const router = require('express').Router();

const Expense = require('./categoryModel');

router.route('/').get((req, res) => {
    Category.find({})
        .then(title => {
            res.status(201).json(title);
        })
        .catch(error => {
            res.status(500).json({ error: err });
        });


});










module.exports = router;