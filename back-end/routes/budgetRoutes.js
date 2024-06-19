const express = require("express")
const router = express.Router()
const {
  getBudgets,
  createBudget,
} = require("../controllers/budgetsControllers")

// Get all budgets (GET)
router.get("/", getBudgets)

// Create Budget (POST)
router.post("/", createBudget)

// Delete Budget (DELETE)
router.delete("/:id", (req, res) => {
  const { id } = req.params
  res.json({ message: `Delete Budget: ${id}` })
})

module.exports = router
