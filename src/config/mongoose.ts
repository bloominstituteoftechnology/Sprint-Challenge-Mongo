import mongoose from 'mongoose'

interface Config {
  db: string
}

export = (config: Config): void => {
  mongoose
    .connect(config.db)
    .then(() => console.log('📙 connected to MongoDB'))
    .catch((err: Error) => console.log(err.message))
  mongoose.Promise = global.Promise
}
