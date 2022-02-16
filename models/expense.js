import mongoose from "mongoose";

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

const Expense = mongoose.model("Expense", expenseSchema);

export { Expense };
