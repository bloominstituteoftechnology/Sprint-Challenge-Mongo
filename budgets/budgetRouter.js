const router = require('express').Router();
const Budget = require('./budgetModel.js');

router
    .route('/')
    .post((req, res) => {
        const { title, budgetAmount } = req.body;
        const newBudget = new Budget({ title, budgetAmount });
        newBudget   
            .save()
            .then(budget => {
                res.status(201).json({ success: "New Budget Added", budget})
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    })

module.exports = router;
