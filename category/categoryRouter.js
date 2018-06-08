const express = require('express');
const Category = require('./Category.js');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Category.find({})
      .select('title -_id')
      .then(categories => {
	res.status(200).json(categories);
      })
      .catch(err => {
	res.status(500).json({ error: 'There was an error retrieving the category data.' });
      });
  })

  .post((req, res) => {
    const { title } = req.body;
    const newCat = new Category({ title });
    if (!req.body.title) {
       res.status(404).json({ error: 'Please provide a category title.' });
      } else {
	 newCat.save()
	  .then(newCategory => {
	    res.status(201).json(newCategory);
	  })
	  .catch(err => {
	    res.status(500).json({ error: 'Category could not be created' });
	  });
       }
  });

module.exports = router;
