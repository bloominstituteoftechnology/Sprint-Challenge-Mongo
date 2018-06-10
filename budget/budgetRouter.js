const express = require('express');
const Budget = require('./Budget.js');
const router = express.Router();

router
    .route('/')
    .get(get)
    .post(post);

router.get('/:id', (req, res) => {
    const { title, budgetAmount } = req.query;
    let query = Budget.find()
        .sort('title')
        .select('title budget')
    if (budgetAmount !== undefined) {
        const filter = new RegExp(budgetAmount, 'i')
        query.where({ budgetAmount: filter })
    }
    query.then(budget => {
        res.status(200).json(budget)
    })
        .catch(err => {
            res.status(500).json(err)
        })
})

// router.get('/:id', (req, res) => {
//     // find all films produced by Gary Kurtz(/apit/films?producer=gary+kurtz)
//     const { producer, released } = req.query;
//     // producer: 'Gary Kurtz'
//     const query = Film.find()
//     if (producer !== undefined) {
//         query.where({ producer: { $regex: producer, $options: 'i' } })
//     }
//     if (released !== undefined) {
//         let releasedFilter = new RegExp(released, 'i');
//         query.where({ release_date: releasedFilter })
//     }
//     //Film.find().where({producer: producer})

//     query.then(films => res.status(200).json(films))
//         .catch(err => res.sendStatus(500));


// })

function get(req, res) {
    Budget.find().then(budgets => {
        res.status(200).json(budgets);
    })
        .catch(err => {
            res.status(500).json({ errorMessage: "The budget information could not be retrieved.", err });

        });
}

function post(req, res) {
    const budgetData = req.body;
    const budget = new Budget(budgetData);

    if (!budgetData.title || !budgetData.budgetAmount) {
        return res.status(400).json({
            errorMessage: "Please provide the title and budget amount for the budget."
        })
    }
    budget
        .save().then(budget => {
            res.status(201).json(budget)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error while saving the budget to the database" });
        });
}



module.exports = router;
