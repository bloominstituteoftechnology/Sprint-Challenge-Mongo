const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

// add endpoints here
router
.route( '/' )
.get( ( req, res ) =>
{
Budget.find()
    .then( budgets =>
    {
    res.status( 200 ).json( budgets );
    } )
    .catch( err =>
    {
    res.status( 500 ).json( { error: 'Error' } )
    } );
} )

.post( ( req, res ) =>
{
const { title, budgetAmount } = req.body;
const newBudget = new Budget( { title, budgetAmount } );
    if (!title || !budgetAmount) {
        res.status(400).json({ error: 'Please provide title and budget amount.' });
        return;
    }
newBudget
    .save() // Returns as a promise
    .then( savedBudget =>
    {
    res.status( 201 ).json( savedBudget );
    } )
    .catch( error =>
    {
    res.status( 422 ).json( { error: err } );
    } )
// res.status(201).json({ status: 'please implement POST functionality' });
} );


module.exports = router;