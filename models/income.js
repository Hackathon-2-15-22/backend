import mongoose from "mongoose"

const Schema = mongoose.Schema

const incomeSchema = new Schema({

  owner:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  // type: {
  //   type: String
  // },
  regularAmount: {
    type: Number
  },
  additionalAmount: {
    type: Number
  },
},
  {
    timestamps: true,
  }
)

const Income = mongoose.model("Income", incomeSchema)

export {
  Income
}