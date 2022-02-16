import mongoose from "mongoose"

const Schema = mongoose.Schema

const incomeSchema = new Schema({

  // category: {
  //   type: String,
  //   enum: ["Wages", "Tips", "Commission", "Interest", "Capital Gains", "Investments", "Gifts", "Government Payments"]
  // },
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