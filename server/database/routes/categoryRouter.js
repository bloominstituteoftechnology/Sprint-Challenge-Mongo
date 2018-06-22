const express = require( 'express' );

const Category = require( '../models/category' );

const router = express.Router();

router
    .route( '/' )
    .get( ( req, res ) =>
    {
        Category.find()
            // .sort('title')
            .then( category =>
            {
                res.status( 200 ).json( category );
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


module.exports = router;
