import mongoose from "mongoose"

const Schema = mongoose.Schema

const goalSchema = new Schema({
  owner:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
})

const Goal = mongoose.model("Goal", goalSchema)

export {
  Goal
}