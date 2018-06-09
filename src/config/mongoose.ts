import mongoose from 'mongoose'

export = (config: any) => {
  mongoose
    .connect(config.db)
    .then(() => console.log('📙 connected to MongoDB'))
    .catch(err => console.log(err.message))
  mongoose.Promise = global.Promise
}
