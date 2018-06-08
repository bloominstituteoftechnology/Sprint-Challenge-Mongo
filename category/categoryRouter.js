const router = require('express'),Router();
const categoryModel = require('./categoryModel');

router
  .route('/')
  .get((req, res) => {
    categoryModel.find()
      .select('title')
      .then(categories => {
	res.status(200).json(categories);
      })
      .catch(err => {
	res.status(500).json({ error: 'There was an error retrieving the category data.' });
      });
  });
