import mongoose, { Schema } from 'mongoose';

const {
  Types: { ObjectId }
} = Schema;

/**
 * @type mongoose.SchemaDefinition
 */
const ExpenseDefinition = {
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  budget: { type: ObjectId, ref: 'Budget' },
  category: { type: ObjectId, ref: 'Category' }
};

export const ExpenseSchema = new Schema(ExpenseDefinition);
export const ExpenseModel = mongoose.model('Expense', ExpenseSchema);
