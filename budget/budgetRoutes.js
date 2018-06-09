const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

router.get('/', (req, res) => {
    // Budget.find()
    //     .then(budget => {
            res.send('Working!!!')
            // res.status(200).json({message: 'Working'})
        // })
        // .catch(err => {
        //     res.status(500).json(err)
        // })
})

// router.post('/', (req, res) => {
//     const { title, budgetAmount } = req.body;
//     const budget = new Budget(req.body);

//     Budget.create(budget)
//         .then(newBudget => {
//             res.status(200).json(newBudget)
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         })
// })

module.exports = router;