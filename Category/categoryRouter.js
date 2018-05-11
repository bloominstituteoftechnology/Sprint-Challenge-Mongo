const express = require('express');
const Category = require('./category')

const router = express.Router()

router.get('/', (req, res)=> {
    Category.find().select('title').then(response => {
      res.status(200).json(response);
    })
    .catch(err=>{
        res.status(500).json({errorMessage: "The category information could not be retrieved."})
    })
  })

 
router.post('/',(req,res)=>{


    const category = new Category(req.body);

    category
      .save()
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: err });
      });

})


module.exports = router;