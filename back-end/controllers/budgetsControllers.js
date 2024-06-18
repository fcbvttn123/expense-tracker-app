const Budget = require("../models/budgetModel")

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

module.exports = {
  createBudget,
}
