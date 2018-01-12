const Category = require('../models/category.js');

const createCategory = (req, res) => {
  const { title} = req.body;

  const category = new Category();
  category.save({title})
  	.then((result) => {
  		res.status(200).json(result);
  		console.log('category has been created!')
  	})
  	.catch((error) => {
  		res.status(500)json(error)
  		console.log('category has not been created!')
  	});
}

const categoryList = (req, res) => {
  const category = new Category();
  category.find()
    .then((result) => {
  		res.status(200).json(result);
  		console.log('category has been created!')
  	})
    .catch((error) => {
  		res.status(500)json(error)
  		console.log('category has not been created!')
  	})
}

module.exports = { createCategory, categoryList };