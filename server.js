const express = require('express') // remember to install your npm packages
cors = require('cors')
helmet = require('helmet')
mongoose = require('mongoose')
budgetController = require('./routes/budgetRoute')
categoryController = require('./routes/categoryController')
expenseController = require('./routes/expenseController')

server = express();


server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('/api/budgets', budgetController)
server.use('/api/categories', categoryController)
server.use('/api/expenses', expenseController)


mongoose.connect("mongodb://localhost/budget")
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
