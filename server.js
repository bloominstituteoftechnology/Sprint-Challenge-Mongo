// ☞ 2b0b84f8-18ae-49e0-b7c9-5d8274121162
const express = require('express')
// remember to install your npm packages

const helmet = require('helmet')
// const cors = require('cors')

// load and connect to mongoose
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/budgetTracker')
  .then(() => {
    console.log('Mongoose is up and running...')
  })
  .catch((err) => { console.log(`Couldn't connect to MongoDB: Error ${err.message}`) })

const budgetRouter = require('./budget/budgetRouter.js')
const categoryRouter = require('./category/categoryRouter.js')
const expenseRouter = require('./expense/expenseRouter.js')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/budget', budgetRouter)
server.use('/api/category', categoryRouter)
server.use('/api/expense', expenseRouter)

server.get('/', (req, res) => res.send('API Running...'))

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Server up and running on ${port}`)
})
