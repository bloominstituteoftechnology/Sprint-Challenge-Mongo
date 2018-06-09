const express = require('express');

const Budget = require('./Budget.js');
const Category = require('../category/Category.js');

const router = express.Router();

// router
//   .route('/')
//   .get((req, res) => {
//     const { gender, height } = req.query;
//     let query = Character.find()
//     if (gender !== undefined) {
//         query.where({ gender: gender })
//             .then( chars => res.json(chars))
//             .catch( err => res.status(500).json({ error: 'Error getting chars from database', err}))
//     }
//     if (height !== undefined) {
//         query.gt({ height: height})
//             .then( chars => res.json(chars))
//             .catch( err => res.status(500).json({ error: 'Error getting chars from database', err}))
//     } else {
//         query.then( chars => res.status(200).json(chars))
//             .catch( err => res.status(500).json({ error: 'Error getting chars from database', err}))
//     }
// });

router
  .route('/')
  .post((req, res) => {
    const budgetData = req.body;
    const { title, budgetAmount } = req.body;

    if (!title || !budgetAmount) {
      return res.status(400).json({error: 'Please provide title and budget amount'})
    }
    const budget = new Budget(budgetData);
    budget.save()
      .then( budget => {
        res.status(201).json(budget);
      })
      .catch( err => {
        res.status(500).json({error: 'Error posting to database', err});
      })
  });

// Find all vehicles driven by a given character. (/api/characters/:id/vehicles)

router
    .route('/:id/vehicles')
    .get((req, res) => {
      const { id } = req.params;
      Vehicle.find({ pilots: id })
        .then(vehicles => {
          if (vehicles !== null) {
            res.status(200).json(vehicles);
          } else {
            res.status(404).json({error: 'There are no vehicles associated with that character.' })
          }
        })
        .catch( err => {
          res.status(500).json({error: 'Error retrieving vehicles from database', err});
        })
    })

// Find all female characters taller than 100cm (/api/characters?minheight=100)


module.exports = router;
