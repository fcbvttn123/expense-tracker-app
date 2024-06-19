const express = require("express")
const router = express.Router()
const {
  getBudgets,
  getBudget,
  createBudget,
  deleteBudget,
  updateBudget,
} = require("../controllers/budgetsControllers")

// Get budgets (GET)
router.get("/", getBudgets)

// Get budget (GET one)
router.get("/:id", getBudget)

// Create Budget (POST)
router.post("/", createBudget)

// Delete Budget (DELETE)
router.delete("/:id", deleteBudget)

// Update Budget (PATCH)
router.patch("/:id", updateBudget)

module.exports = router
