const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

// add endpoints here
router
.route( '/' )
.get( ( req, res ) =>
{
Category.find()
    .then( categories =>
    {
    res.status( 200 ).json( categories );
    } )
    .catch( err =>
    {
    res.status( 500 ).json( { error: 'Error' } )
    } );
} )

.post( ( req, res ) => {
const { title } = req.body;
const newCategory = new Category( { title } );
    if (!title ) {
        res.status(400).json({ error: 'Please provide title.' });
        return;
    }
newCategory
    .save() // Returns as a promise
    .then( savedCategory =>
    {
    res.status( 201 ).json( savedCategory );
    } )
    .catch( error =>
    {
    res.status( 422 ).json( { error: err } );
    } )
// res.status(201).json({ status: 'please implement POST functionality' });
} );


module.exports = router;