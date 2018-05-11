const router = require('express').Router();
const Expense = require('./Expense');

router
    .route('/')
    .get(get)
    .post(post)


    function get(req, res) {
        Expense.find().then(exp => {
            res.status(200).json(exp);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "The Category information could not be retrieved." })
        });
    }


    function post(req, res) {
        const expense = new Expense(req.body);
        expense
          .save()
          .then(stuff => {
              res.status(201).json(stuff);
          })
          .catch(err => {
              res.status(500).json({ message: 'something happened.'})
          });
  
    } 


module.exports = router;