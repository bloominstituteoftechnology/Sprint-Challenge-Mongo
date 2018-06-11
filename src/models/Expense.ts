import { Document, model, Schema, Types } from 'mongoose'

export type ExpenseModel = Document & {
  amount: number,
  budget: Types.ObjectId | null,
  category: Types.ObjectId | null,
  description: string
}

const expenseSchema = new Schema({
  amount: {
    required: true,
    type: Number
  },
  budget: {
    ref: 'Budget',
    type: Schema.Types.ObjectId
  },
  category: {
    ref: 'Budget',
    type: Schema.Types.ObjectId
  },
  description: {
    required: true,
    type: String
  }
})

const Expense = model('Expense', expenseSchema)

export default Expense
