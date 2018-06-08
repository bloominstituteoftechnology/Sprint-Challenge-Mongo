const router = require('express').Router();
const Budget = require('./Budget.js');

router
    .route('/')
    .post(post)
        function post(req, res) {
            const budgetRecord = req.body;
            const { title, budget } = req.body;
            const newBudget = new Budget(budgetRecord);

            newBudget
                .save()
                    .then(saveBudget => {
                        res.status(201).json({ saveBudget });
                    })
                    .catch(error => {
                        res.status(500).json(error);
                    })
        }

module.exports = router;