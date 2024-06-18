const express = require("express")
const { createBudget } = require("../controllers/budgetsControllers")
const router = express.Router()

// Get all budgets (GET)
router.get("/", (req, res) => {
  res.json({ message: "Get all budgets" })
})

// Create Budget (POST)
router.post("/", createBudget)

// Delete Budget (DELETE)
router.delete("/:id", (req, res) => {
  const { id } = req.params
  res.json({ message: `Delete Budget: ${id}` })
})

module.exports = router
