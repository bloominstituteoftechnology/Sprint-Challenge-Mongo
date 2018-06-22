const express = require( 'express' );

const Category = require( '../models/category' );

const router = express.Router();

router
    .route( '/' )
    .get( ( req, res ) =>
    {
        Category.find()
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
        const newCategory = new Category( { title } );
        newCategory
            .save()
            .then( addedCategory =>
            {
                res.status( 201 ).json( addedCategory );
            } )
            .catch( err =>
            {
                res.status( 422 ).json( { error: 'err' } );
            } )
    } )


module.exports = router;
