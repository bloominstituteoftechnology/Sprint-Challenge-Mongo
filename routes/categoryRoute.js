const router = require('express').Router();

const Category = require('../database/Category');

router
  .get('/', (req, res) => {
    Category.find()
      .exec((err, raw) => {
        if (err)
          return res.status(500).json(err);

        res.json(raw);
      });
  })

  .post('/', (req, res) => {
    const { title } = req.body;
    const category = { title };
    
    Category.create(category, (err, raw) => {
      if (err)
        return res.status(500).json(err);

      res.json(raw);
    });
  });

module.exports = router;