const express = require( 'express' );

const Budget = require( '../models/budget' );

const router = express.Router();

router
    .route( '/' )
    .get( ( req, res ) =>
    {
        Budget.find()
            .sort('title')
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
        const newBud = new Budget( { title } );
        newBud
            .save()
            .then( addedBud =>
            {
                res.status( 201 ).json( addedBud );
            } )
            .catch( err =>
            {
                res.status( 422 ).json( { error: 'err' } );
            } )
    } )


module.exports = router;
