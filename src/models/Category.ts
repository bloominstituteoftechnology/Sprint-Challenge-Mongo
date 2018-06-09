import { Document, model, Schema } from 'mongoose'

export type CategoryModel = Document & {
  title: string
}

const categorySchema = new Schema({
  title: { type: String, unique: true }
})

const Category = model('Category', categorySchema)

export default Category
