const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const Budget = require('./Models/BudgetModel.js');
const Category = require('./Models/CategoryModel.js');

const server = express();

// add your server code
server.use(helmet());
server.use(express.json());

server.post('/budget', (req, res) => {
  const { title, budgetAmount } = req.body;
  
  const budget = new Budget({ title, budgetAmount });
  budget.save()
    .then(savedBudget => {
      res.status(200).json({ BudgetSaved: savedBudget });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error saving new Budget'})
    })
})

server.post('/category', (req, res) => {
  const { title } = req.body;

  const category = new category({ title });
  category.save()
    .then(savedCategory => {
      Category.find()
        .select('title')
        .then(categories => {
          res.status(200).json({ Categories: categories });
        })
        .catch(error => {
          res.status(500).json({ error: 'Error' });
        })
    })
    .catch(error => {
      res.status(500).json({ error: 'Error saving new Category '});
    })
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
