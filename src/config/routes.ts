import { WelcomeController } from '../controllers'

export = (app: any): void => {
  app.use('/welcome', WelcomeController)
}
