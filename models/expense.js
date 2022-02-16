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
    enum: [
      "Housing",
      "Transportation",
      "Travel",
      "Groceries",
      "Dining Out",
      "Utilities",
      "Cell Phone",
      "Pet Food & Care",
      "Pet Insurance",
      "Clothing & Personal Upkeep",
      "Health Insurance",
      "Memberships & Subscriptions",
      "Life Insurance",
      "Homeowners Insurance",
      "Entertainment",
      "Student Loans",
      "Credit Card Debt",
      "Retirement",
      "Emergency Fund",
      "Large Purchases",
      "Goals",
    ],
    required: true,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

export { Expense };
