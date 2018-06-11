const express = require('express');
const Category = require('./Category.js');
const router = express.Router();

router
    .route('/')
    .get(get)
    .post(post);

router
    .route('/:id')
    .get((req, res) => {
        const objId = req.params.id;
        Category.findById(objId)
            .then(category => {
                if (category) {
                    res.status(201).json({ category })
                } else {
                    return res.status(404).json({
                        message: "The category with the specified ID does not exist."
                    })
                }
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "The category information could not be retrieved.", err })
            })
    })

// router.get('/:id', (req, res) => {
//     // find all films produced by Gary Kurtz(/apit/films?producer=gary+kurtz)
//     const { producer, released } = req.query;
//     // producer: 'Gary Kurtz'
//     const query = Film.find()
//     if (producer !== undefined) {
//         query.where({ producer: { $regex: producer, $options: 'i' } })
//     }
//     if (released !== undefined) {
//         let releasedFilter = new RegExp(released, 'i');
//         query.where({ release_date: releasedFilter })
//     }
//     //Film.find().where({producer: producer})

//     query.then(films => res.status(200).json(films))
//         .catch(err => res.sendStatus(500));


// })

function get(req, res) {
    Category.find().then(categories => {
        res.status(200).json(categories);
    })
        .catch(err => {
            res.status(500).json({ errorMessage: "The categories could not be retrieved.", err });

        });
}

function post(req, res) {
    const categoryData = req.body;
    const category = new Category(categoryData);

    if (!categoryData.title) {
        return res.status(400).json({
            errorMessage: "Please provide the title for the category."
        })
    }
    category
        .save().then(category => {
            res.status(201).json(category)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error while saving the category to the database" });
        });
}



module.exports = router;
