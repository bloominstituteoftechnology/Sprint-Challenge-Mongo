const router = require('express').Router();
const Category = require('./Category');

router
    .route('/')
    .get(get)
    .post(post)


    function get(req, res) {
        Category.find().select('title -_id').then(cats => {
           
            res.status(200).json(cats);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "The Category information could not be retrieved." })
        });
    }


    function post(req, res) {
        const category = new Category(req.body);
        category
          .save()
          .then(stuff => {
              res.status(201).json(stuff);
          })
          .catch(err => {
              res.status(500).json({ message: 'something happened.'})
          });
  
    } 


module.exports = router;