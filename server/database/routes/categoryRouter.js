const express = require( 'express' );

const Category = require( '../models/category' );

const router = express.Router();

router
    .route( '/' )
    .get( ( req, res ) =>
    {
        Category
            .find()
            .sort('title')
            .then( categories =>
            {
                res.status( 200 ).json( categories );
            } )
            .catch( err =>
            {
                res.status( 500 ).json( { error: 'err' } )
            } );
    } )

    .post( ( req, res ) =>
    {
        const { title } = req.body;
        const newCat = new Category( { title } );
        newCat
            .save()
            .then( addedCat =>
            {
                res.status( 201 ).json( addedCat );
            } )
            .catch( err =>
            {
                res.status( 422 ).json( { error: 'err' } );
            } )
    } )


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
