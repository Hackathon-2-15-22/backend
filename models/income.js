import mongoose from "mongoose"

const Schema = mongoose.Schema

const incomeSchema = new Schema({
  amount: {
    type: Number,
  }
})

const Income = mongoose.model("Income", incomeSchema)

export {
  Income
}