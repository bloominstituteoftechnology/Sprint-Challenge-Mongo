import mongoose, { Schema } from 'mongoose';

const {
  Types: { ObjectId }
} = Schema;

/**
 * @type mongoose.SchemaDefinition
 */
const CategoryDefinition = {
  title: { type: String, required: true }
};

export const CategorySchema = new Schema(CategoryDefinition);
export const CategoryModel = mongoose.model('Category', CategorySchema);
