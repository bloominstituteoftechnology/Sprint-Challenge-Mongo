const Category = require('../models/category')
module.exports = categoryCreate = (req, res) => {
     const {title} = req.body
     const category = new Category()
     category.save({title})
       .then(
           (results) => {
               // do something here are results
               res.status(200).json(results)
               console.log('user created category');
           }
       )
       .catch((err) => {
        //do something theres be an error
        res.status(500).json(err)
        console.log('problem creating new category');
    })
}


module.exports = categoryList = (req, res) => {
const category = new Category()
  category.find()
  .then(
    (results) => {
        // do something here are results
        res.status(200).json(results)
        console.log('user created category');
    })
   .catch((err) => {
    //do something theres be an error
    res.status(500).json(err)
    console.log('problem creating new category');
  }











}