const router = require("express").Router();

const Category = require("./category");

router.post("/", function post(req, res) {
  const categoryData = req.body;
  const category = new Category(categoryData);

  category
    .save()
    .then(category => {
      res.status(201).json(category);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/", function get(req, res) {
  Category.find().then(categorys => {
    res.status(200).json(categorys);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Category.findById(id)
    .then(categorys => {
      res.status(200).json(categorys);
    })
    .catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Category.findByIdAndRemove(id)
    .then(category => {
      if (category) {
        res.status(204).end();
      } else {
        res.status(404).json({ msg: "Category not found" });
      }
    })
    .catch(err => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;

  const options = {
    new: true
  };

  Category.findByIdAndUpdate(id, update, options)
    .then(category => {
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ msg: "Category not found" });
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
