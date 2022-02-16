import { Profile } from "../models/profile.js"
import { Income } from "../models/income.js"

const create = async (req, res) => {
  try {
    req.body.owner = req.user.profile
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
      req.params.id,
      req.body,
      { new: true }
      )
    return res.status(200).json(updatedMoney)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const deleteIncome = async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.income.remove({ _id: req.params.id })
    await profile.save()
    return res.status(204).end()
  } catch (err) {
    return res.status(500).json(err)
  }
}

export {
  create,
  update,
  deleteIncome as delete
}