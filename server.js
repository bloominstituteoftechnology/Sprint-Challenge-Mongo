const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')
const cors = require('cors')

const budgetRouter = require('./budgets/budgetRouter')
const expenseRouter = require('./expenses/expenseRouter')
const categoryRouter = require('./categories/categoryRouter')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

mongoose.connect('mongodb://localhost/budgetTracker', {}, err => {
  if (err) console.log('Database connection failed')
  else console.log('Successfully connected to MongoDB')
})

server.use('/api/budgets', budgetRouter)
server.use('/api/expenses', expenseRouter)
server.use('/api/categories', categoryRouter)

server.get('/', (req, res) => res.send('API running...'))

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Server up and running on ${port}`)
})
