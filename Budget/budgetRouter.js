const express = require("express");

const Budget = require("./Budgets");

const router = express.Router();

router.route("/").post((req, res) => {
  const budget = new Budget(req.body);

  budget
    .save()
    .then(budget => {
      res.status(200).json(budget);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          errorMessage: "An error occured while attempting to save budget",
          error: err
        });
    });
});

module.exports = router;
