const router = require('express').Router();

const Budget = require('./budgetModel');

router  
    .route('/')
    .get((req, res) => {
        Budget.find({})
            .then(friends => {
                res.status(200).json(budget);
            })
            .catch(err => {
                res.status(500).json({ errorMessage: 'The budget information could not be retrieved.' });
            });
    });

module.exports = router;