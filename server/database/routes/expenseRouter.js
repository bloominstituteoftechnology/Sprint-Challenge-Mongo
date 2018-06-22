const express = require( 'express' );

const Expense = require( '../models/expense' );

const router = express.Router();

router
    .route( '/' )
    .get( ( req, res ) =>
    {
        Character.find()
            .then( character =>
            {
                res.status( 200 ).json( character );
            } )
            .catch( err =>
            {
                res.status( 500 ).json( { error: 'err' } )
            } );
    } )

    .post( ( req, res ) =>
    {
        const {amount, description, budget, category} = req.body;
        const newExp = new Character( {amount, description, budget, category} );
        newExp
            .save()
            .then( addedExp =>
            {
                res.status( 201 ).json( addedExp );
            } )
            .catch( err =>
            {
                res.status( 422 ).json( { error: 'err' } );
            } )
    } )


module.exports = router;
