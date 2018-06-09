import { BudgetCtrl, WelcomeCtrl } from '../controllers'

export = (app: any): void => {
  app.use('/welcome', WelcomeCtrl)
  app.use('/budget', BudgetCtrl)
}
