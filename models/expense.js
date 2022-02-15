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

const expenseSchema = new Schema({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  category: [categorySchema],
})

const Expense = mongoose.model("Expense", expenseSchema)

export {
  Expense
}