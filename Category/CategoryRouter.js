const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

router.get("/", (req, res) => {
    Category.find().then(categories => {
      res.status(200).json(categories)
    }).catch(err => {
      res.status(500).json({
        errorMessage: "The category information could not be retrieved."})
    })
  })
  
  router.get("/:id", (req, res) => {
    const id = req.params.id
    Category.findById(id).then(category => {
      res.status(200).json(category)
    }).catch(err => {
      res.status(404).json({
        message: "A category with that id could not be found"
      })
    })
  })

  
  router.post("/", (req, res) => {
    const categoryData = req.body;
    const category = new Category(categoryData);
      
    category.save().then(category => {
        res.status(200).json({
          message: "Successfuly saved new category to database"
        })
      }).catch(err => {
        res.status(500).json({
          errorMessage: "There was an error while saving the category to the database."
        })
      })
  })
  
  
  router.delete("/:id", (req, res) => {
    const id = req.params.id

    Category.findByIdAndRemove(id).then(category => {
        res.status(200).json({
            message: "category has been deleted from the database"
        })
    }).catch(err => {
      res.status(500).json({
        errorMessage: "The category could not be removed"
        })
    })
})
  
  
  router.put("/:id", (req, res)=> {
    const id = req.params.id;
    const input = req.body;
  
    Category.findByIdAndUpdate(id, input).then(category => {
        res.status(200).json({
            message: "category has been succesfully updated"
          })
        }).catch(err => {
            res.status(500).json({
      errorMessage: "The category information could not be modified."
    })
  })
});