const express = require("express");

const Expense = require("../models/expense");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    Expense.find()
      // .populate( 'budget', '_id title' )
      .populate({ path: "budget", select: "_id title", sort: -1 })
      .populate("category", "_id title")
      .sort("budget")
      .then(expenses => {
        res.status(200).json(expenses);
      })
      .catch(err => {
        res.status(500).json({ error: "err" });
      });
  })

  .post((req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExp = new Expense({ amount, description, budget, category });
    newExp
      .save()
      .then(addedExp => {
        res.status(201).json(addedExp);
      })
      .catch(err => {
        res.status(422).json({ error: "err" });
      });
  });

// router
//     .route( '/:id' )
//     .get( ( req, res ) =>
//     {
//         const { id } = req.params;
//         Budget
//             .findById( id )
//             .then( foundBudget =>
//             {
//                 res.status( 200 ).json( foundBudget );
//             } )
//             .catch( err =>
//             {
//                 res.status( 500 ).json( { errorMessage: "That budget does not seem to be here." } );
//             } )
//     } )

//     .put( ( req, res ) =>
//     {
//         const { id } = req.params;
//         const updates = ( { firstName, lastName, age } = req.body );
//         // findByIdAndUpdate
//         Friend
//             .findByIdAndUpdate( id, updates, { firstName, lastName, age } = req.body )
//             .then( friend =>
//             {
//                 res.json( friend );
//             } )
//             .catch( err =>
//             {
//                 res.status( 500 ).json( { status: 'error didnt find what your looking for' } );
//             } )
//         // res.json(200).json({ status: 'please implement PUT functionality' });
//     } )
//     .delete( ( req, res ) =>
//     {
//         const { id } = req.params;
//         const updates = ( { firstName, lastName, age } = req.body );
//         // findByIdAndUpdate
//         Friend
//             .findByIdAndRemove( id, updates, { firstName, lastName, age } = req.body )
//             .then( friendRemoved =>
//             {
//                 res.json( friendRemoved );
//             } )
//             .catch( err =>
//             {
//                 res.status( 500 ).json( { status: 'error didnt find what your looking for' } );
//             } )
//         // res.json(200).json({ status: 'please implement PUT functionality' });
//     } )
module.exports = router;
