const express = require('express') // remember to install your npm packages
const helmet = require('helmet')
const mongoose = require('mongoose')
const budgetRouter = require('./budget/budgetRouter')
const expenseRouter = require('./expense/expenseRouter')
const categoryRouter = require('./category/categoryRouter')

const server = express()
server.use(express.json())
server.use(helmet())
mongoose.Promise = global.Promise

server.use('/api/budget', budgetRouter)
server.use('/api/expense', expenseRouter)
server.use('/api/category', categoryRouter)

mongoose
  .connect('mongodb://localhost/budgetapp')
  .then(() => console.log(`connected to MongoDB`))
  .catch(err =>
    console.log({
      error: err,
      message: 'unable to connect to mongoDB'
    })
  )

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Server up and running on ${port}`)
})
