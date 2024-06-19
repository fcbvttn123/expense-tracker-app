const express = require("express")
const router = express.Router()
const {
  getBudgets,
  createBudget,
  deleteBudget,
  updateBudget,
} = require("../controllers/budgetsControllers")

// Get all budgets (GET)
router.get("/", getBudgets)

// Create Budget (POST)
router.post("/", createBudget)

// Delete Budget (DELETE)
router.delete("/:id", deleteBudget)

// Update Budget (PATCH)
router.patch("/:id", updateBudget)

module.exports = router
