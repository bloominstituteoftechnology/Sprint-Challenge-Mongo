const express = require("express");

const Category = require("../models/category");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    Category.find()
      .sort("title")
      .then(categories => {
        res.status(200).json(categories);
      })
      .catch(err => {
        res.status(500).json({ error: "err" });
      });
  })

  .post((req, res) => {
    const { title } = req.body;
    const newCat = new Category({ title });
    newCat
      .save()
      .then(addedCat => {
        res.status(201).json(addedCat);
      })
      .catch(err => {
        res.status(422).json({ error: "err" });
      });
  });

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    Category.findById(id)
      .then(foundCategory => {
        res.status(200).json(foundCategory);
      })
      .catch(err => {
        res
          .status(500)
          .json({ errorMessage: "I aint got a Category called that...." });
      });
  })

  .put((req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    Category.findByIdAndUpdate(id, { title })
      .then(category => {
        res.json(category);
      })
      .catch(err => {
        res
          .status(500)
          .json({
            status: "I aint gonna be able to update what aint here buddy!"
          });
      });
    // res.json(200).json({ status: 'please implement PUT functionality' });
  })
  .delete((req, res) => {
    const { id } = req.params;
    // const updates = ( { title } = req.body );
    // findByIdAndUpdate
    Category.findByIdAndRemove(id /*, updates, { title } = req.body*/)
      .then(categoryRemoved => {
        res.json(categoryRemoved);
      })
      .catch(err => {
        res
          .status(500)
          .json({
            status:
              "That Category aint here buddy. Check your bank account to make sure you still have money!"
          });
      });
    // res.json(200).json({ status: 'please implement PUT functionality' });
  });
module.exports = router;
