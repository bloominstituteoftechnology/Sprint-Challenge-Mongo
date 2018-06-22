const express = require( 'express' );

const Budget = require( '../models/budget' );

const router = express.Router();

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
            res.status( 500 ).json( { error: 'Error!' } )
        } );
} )

    // .post( ( req, res ) =>
    // {
    //     const { title } = req.body;
    //     const newBud = new Budget( { title } );
    //     newBud
    //         .save()
    //         .then( addedBud =>
    //         {
    //             res.status( 201 ).json( addedBud );
    //         } )
    //         .catch( err =>
    //         {
    //             res.status( 422 ).json( { error: 'err' } );
    //         } )
    // } )


router
    .route( '/:id' )
    .get( ( req, res ) =>
    {
        const { id } = req.params;
        Budget
            .findById( id )
            .then( foundBudget =>
        {
            res.status( 200 ).json( foundBudget );    
            } )
            .catch( err =>
            {
                res.status( 500 ).json( { errorMessage: "That budget does not seem to be here." } );
        })
})

module.exports = router;
