const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();

// add endpoints here
router
.route( '/' )
.get( ( req, res ) =>
{
Expense.find()
    .then( expenses =>
    {
    res.status( 200 ).json( expenses );
    } )
    .catch( err =>
    {
    res.status( 500 ).json( { error: 'Error' } )
    } );
} )

.post( ( req, res ) =>
{
const { amount, description, budget, category } = req.body;
const newExpense = new Expense( { title } );
    if (!amount || !description || !budget || !category) {
        res.status(400).json({ error: 'Please provide an amount, description, budget, and category.' });
        return;
    }
newExpense
    .save() // Returns as a promise
    .then( savedExpense =>
    {
    res.status( 201 ).json( savedExpense );
    } )
    .catch( error =>
    {
    res.status( 422 ).json( { error: err } );
    } )
// res.status(201).json({ status: 'please implement POST functionality' });
} );


module.exports = router;