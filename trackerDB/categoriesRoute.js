const express = require("express");
const router = express.Router();
const Category = require("./categoriesModel.js");

router.get("/", (req, res) => {
  Category.find()
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ msg: "we cant display category " });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Category.findById(id)
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ msg: "we cant display category " });
    });
});

router.post("/", (req, res) => {
  const obj = req.body;
  newCategory = new Category(obj);
  newCategory
    .save()
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      res.status(500).json({ msg: "we cant display category" });
    });
});

module.exports = router;
