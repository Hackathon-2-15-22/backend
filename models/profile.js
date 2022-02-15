import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  income: [{type: mongoose.Schema.Types.ObjectId, ref: "Income"}],
  expense: [{type: mongoose.Schema.Types.ObjectId, ref: "Expense"}],
  goal: [{type: mongoose.Schema.Types.ObjectId, ref: "Goal"}],
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
