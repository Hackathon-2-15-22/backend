import mongoose from "mongoose";

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
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
  category: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true,
  }
)


const Expense = mongoose.model("Expense", expenseSchema);

export { Expense };
