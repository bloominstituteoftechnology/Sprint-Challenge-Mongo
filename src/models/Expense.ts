import { Document, model, Schema, Types } from 'mongoose'

export type ExpenseModel = Document & {
  amount: number,
  budget: Types.ObjectId,
  category: Types.ObjectId
  description: string,
}

const expenseSchema = new Schema({
  amount: Number,
  budget: { type: Schema.Types.ObjectId, ref: 'Budget' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  description: String
})

const Expense = model('Expense', expenseSchema)

export default Expense
