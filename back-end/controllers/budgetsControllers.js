const Budget = require("../models/budgetModel")

// GET
async function getBudgets(req, res) {
  try {
    const budgets = await Budget.find({})
    res.status(200).json(budgets)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// POST
async function createBudget(req, res) {
  const { categories, period, startDate, endDate, total } = req.body
  try {
    const budget = await Budget.create({
      categories,
      period,
      startDate,
      endDate,
      total,
    })
    res.status(200).json(budget)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// DELETE
async function deleteBudget(req, res) {
  const { id } = req.params
  try {
    const budget = await Budget.findOneAndDelete({ _id: id })
    res.status(200).json(budget)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// PATCH
async function updateBudget(req, res) {
  const { id } = req.params
  try {
    const budget = await Budget.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    )
    res.status(200).json(budget)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createBudget,
  getBudgets,
  deleteBudget,
  updateBudget,
}
