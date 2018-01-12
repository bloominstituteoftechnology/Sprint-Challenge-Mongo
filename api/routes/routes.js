const { createBudget } = require('../controllers/budgetControllers');
const { createCategory, getCategories } = require('../controllers/categoryControllers');
const { createExpense, getExpenses } = require('../controllers/expenseControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  app.get('/test', (req, res) => {

    console.log(getCategories());

    res.status(200).json({ success: true });

  });

  app.post('/budget', (req, res) => {
    
    const newBudget = req.body;

    createBudget(newBudget)
      .then(function() {
        res.status(200).json({ success: true });
      })
      .catch(function(error) {
        console.log(error);
        res.status(422).json({ error: error });
      });
      
  });
  
  app.post('/category', (req, res) => {
    
    const newCategory = req.body;

    createCategory(newCategory)
      .then(function() {
        res.status(200).json({ success: true });
      })
      .catch(function(error) {
        console.log(error);
        res.status(422).json({ error: error });
      });
      
  });

  app.get('/category', (req, res) => {

    getCategories()
      .then(function(data) {
        const categories = data.map(category => category.title);
        res.status(200).json({ success: true, categories });
      })
      .catch(function(error) {
        console.log(error);
        res.status(500).json({ error: error });
      });

  });

  app.post('/expense', (req, res) => {

    const newExpense = req.body;

    createExpense(newExpense)
      .then(function(data) {
        res.status(200).json({ success: true });
      })
      .catch(function(error) {
        res.status(500).json({ error });
      });

  });

  app.get('/expense', (req, res) => {

    getExpenses()
      .then(function(data) {
        res.status(200).json({ success: true, expenses: data });
      })
      .catch(function(error) {
        res.status(500).json({ error });
      });

  });

};
