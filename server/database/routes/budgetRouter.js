const express = require( 'express' );

const Budget = require( '../models/budget' );

const router = express.Router();

router
    .route( '/' )
    .get( ( req, res ) =>
    {
        Budget.find()
            .then( budget =>
            {
                res.status( 200 ).json( budget );
            } )
            .catch( err =>
            {
                res.status( 500 ).json( { error: 'err' } )
            } );
    } )

    .post( ( req, res ) =>
    {
        const { title } = req.body;
        const newBudget = new Budget( { title } );
        newBudget
            .save()
            .then( addedBudget =>
            {
                res.status( 201 ).json( addedBudget );
            } )
            .catch( err =>
            {
                res.status( 422 ).json( { error: 'err' } );
            } )
    } )


module.exports = router;
