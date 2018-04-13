const router = require('express').Router();

const CategoryModel = require('./categoryModel');
const db_thrown_error = require(`./db_thrown_error`);

// add endpoints here
router
  .route(`/`)
  .get((req, res) => {
    let query = CategoryModel.find({});

    query
      .then(categories => {
        if (categories.length === 0) {
          res.status(404).json({ error: `No categories found!` });
        } else {
          res.status(200).json(categories);
        }
      })
      .catch(err => {
        const error = db_thrown_error({ error: err, type: `GET` });
        res.status(error.status).json(error.errorMessage);
      });
  })
  .post((req, res) => {
    // do some error checks
    if (req.body.title === undefined) {
      res.status(400).json({ error: `Please enter a category title` });
      return;
    }

    // create a category Model
    const category = new CategoryModel(req.body);

    category
      .save()
      .then(savedCategory => {
        res.status(201).json(savedCategory);
      })
      .catch(err => {
        const error = db_thrown_error({ error: err, type: `POST` });
        res.status(error.status).json(error.errorMessage);
      });
  });

module.exports = router;
