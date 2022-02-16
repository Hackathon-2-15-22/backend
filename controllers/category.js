import { Category } from "../models/catagory.js"

const index = async (req, res) => {
  try {
    const categories = await Category.find({})
    return res.status(200).json(categories)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const create = async (req, res) => {
  try {
    const newCategory = new Category(req.body)
    await newCategory.save()
    return res.status(201).json(newCategory)
  } catch (error) {
    return res.status(500).json(error)
  }
}

