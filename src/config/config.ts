export = {
  db: process.env.DATABASE || 'mongodb://localhost:27017/budgettracker',
  port: process.env.PORT || 8080
}
