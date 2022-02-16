import mongoose from "mongoose"

const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: {
    type: String, 
    required: true,
    lowercase: true, 
    unique: true
  }
})

const Category = mongoose.model("Category", categorySchema)

export {
  Category
}
