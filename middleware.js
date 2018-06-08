


const getMiddleware = (goose) => {
  return (req, res, next) => {
    if (req.params.id) req.getResult = goose.findById(req.params.id);
    else req.getResult = goose.find();
    next();
  }
}

const postMiddleware = (goose) => {
  return (req, res, next) => {
    if (req.params.id) res.status(400).json({ errorMessage: "Cannot post to specific ID" })
    else {
      const postGoose = new goose(req.saneBody);
      postGoose
        .save()
        .then(postedGoose => {
          req.postResult = postedGoose;
          next();
        })
        .catch(error => {
          res.status(500).json({ error: error });
        });
    }
  }
}

//middleware to sanitize the body
const sanitizeMiddleware = (type) => {
  return (req, res, next) => {
    if (type === "budget") {
      const budget = ({ title, budgetAmount } = req.body);
      if (title === undefined || budgetAmount === undefined) {
        res.status(400).json({ errorMessage: "Please provide a title and budget amount." })
      }
      req.saneBody = budget;
    }

    if (type === "category") {
      const category = ({ title } = req.body);
      if (title === undefined) {
        res.status(400).json({ errorMessage: "Please provide a title." })
      }
      req.saneBody = category;
    }

    if (type === "expense") {
      const expense = ({ amount, description, budget, category } = req.body);
      if (amount === undefined || description === undefined || budget === undefined || category === undefined) {
        res.status(400).json({ errorMessage: "Please provide an amount, description, budget, and category." })
      }
      req.saneBody = expense;
    }
    next();
  }
}


module.exports = {
  sanitizeMiddleware: sanitizeMiddleware,
  getMiddleware: getMiddleware,
  postMiddleware: postMiddleware
};
