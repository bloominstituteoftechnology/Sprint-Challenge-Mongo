const router = require('express').Router();

const Category = require('./categoryModel.js');

router.route('/').post((req, res) => {
  const category = new Category(req.body);

  category
    .save()
    .then(savedCategory => {
      res.status(200).json(savedCategory);
    })
    .catch(err => console.log('err'));
});

module.exports = router;
