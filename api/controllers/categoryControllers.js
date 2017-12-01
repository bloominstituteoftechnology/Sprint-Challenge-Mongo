const Category = require('../models/category');

const categoryCreate = (req, res) => {
  const { title } =  req.body;
  const newCategory = new Category({ title });
  newCategory.save(newCategory, (err, savedCategory) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(savedCategory);
  })
};

const getAllCategories = (req, res) => {
	Category.find({})
		.then(categories => {
		  if (categories.length === 0) throw new Error();
		  res.json(posts)
		})
    	.catch(err => res.status(422).json(err));
};

module.exports = {
  categoryCreate,
  getAllCategories
};