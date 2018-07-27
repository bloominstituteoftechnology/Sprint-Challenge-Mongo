import { Document, model, Schema } from 'mongoose'

export type BudgetModel = Document & {
  budgetAmount: number,
  title: string
}

const budgetSchema = new Schema({
  budgetAmount: Number,
  title: {
    required: true,
    type: String,
    unique: true
  }
})

const Budget = model('Budget', budgetSchema)

export default Budget
