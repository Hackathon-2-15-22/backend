import { Goal } from "../models/goal.js";
import { Profile } from "../models/profile.js";

const index = async (req, res) => {
  try {
    const goals = await Goal.find({});
    return res.status(200).json(goals);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const show = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    return res.status(200).json(goal);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    req.body.owner = req.user.profile;
    const newGoal = new Goal(req.body);
    await newGoal.save();
    await Profile.findByIdAndUpdate(
      { _id: req.user.profile },
      { $push: { goal: newGoal } }
    );
    return res.status(201).json(newGoal);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedGoal);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteGoal = async (req, res) => {
  try {
    await Goal.findByIdAndDelete(req.params.id);
    const profile = await Profile.findById(req.user.profile);
    profile.goal.remove({ _id: req.params.id });
    await profile.save();
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { index, show, create, update, deleteGoal as delete };
