import mongoose from "mongoose"

const Schema = mongoose.Schema

const incomeSchema = new Schema({

  owner:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  amount: {
    type: Number
  }
})

const Income = mongoose.model("Income", incomeSchema)

export {
  Income
}