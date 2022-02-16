import { Profile } from "../models/profile.js"
import { Income } from "../models/income.js"

const create = async (req, res) => {
  try {
    const money = await new Income(req.body)
    await money.save()
    await Profile.updateOne(
      { _id: req.user.profile },
      { $push: { income: money } }
    )
    return res.status(201).json(money)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const update = async (req, res) => {
  try {
    const updatedMoney = await Income.findByIdAndUpdate(
      req.params._id,
      { $set: req.body },
      { new: true }
      )
    return res.status(200).json(updatedMoney)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export {
  create,
  update,
}