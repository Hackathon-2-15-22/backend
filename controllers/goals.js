import { Goal } from '../models/goal.js'
import { Profile } from '../models/profile.js'

const index = async (req, res) => {
    try {
        const user = await Profile.findOne({email: req.body.email})
        return res.status(200).json(user.goal)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const create = async (req, res) => {
    try {
        const newGoal = new Goal(req.body)
        await newGoal.save()
        await Profile.updateOne(
            { _id: req.user.profile },
            { $push: { goals: newGoal } }
        )
        return res.status(201).json(newGoal)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const update = async (req, res) => {
    try {
        const updatedGoal = await Goal.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      return res.status(200).json(updatedExpense);
    } catch (error) {
      return res.status(500).json(error);
    }
}

const deleteGoal = async (req, res) => {
    try {
      await Goal.findByIdAndDelete(req.params.id);
      const profile = await Profile.findById(req.user.profile);
      profile.goals.remove({ _id: req.params.id });
      await profile.save();
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json(error);
    }
  };

export { index, create, update, deleteGoal as delete }