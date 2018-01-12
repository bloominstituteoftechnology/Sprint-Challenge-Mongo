module.exports = app => {
  // Todo: Fill in your routes here

  // budget
  app.post("/budget", function(req, res) {
    const budget = [];
    budget.push(newBudget);
    res.status(201).json(budget);
  });

  // category
  app.get("/category", function(req, res) {
    category.push(newCategory);
    res.status(200).json(category);
  });

  app.post("/category", function(req, res) {
    if (!req.body.title) {
      res.status(422).json({ error: "Must provide a title" });
    } else {
      category.push(newCategory);
      res.status(200).json(category);
    }
  });

  // expense
  app.get("/expense", function(req, res) {
    res.status(200).json(expense);
  });

  app.post("/expense", function(req, res) {
    if (!req.body._id && !req.body._id) {
      res.status(422).json({ error: "Must provide budget and category ids" });
    } else {
      category.push(newCategory);
      res.status(200).json(category);
    }
  });
};
