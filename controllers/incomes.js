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

const index = async (req, res) => {
  try {
    const incomes = await Income.find({});
    return res.status(200).json(incomes);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const show = async (req, res) => {
  try {
    const income = await Income.findById(req.params.id);
    return res.status(200).json(income);
  } catch (error) {
    return res.status(500).json(error);
  }
};

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
  index,
  show,
  create,
  update,
  deleteIncome as delete
}