const {getExpenses, getExpense, createExpense, deleteExpense, updateExpense} = require("../controllers/expensesControllers")
const express = require("express")
const router = express.Router()

// Get all expenses (GET)
router.get("/", getExpenses)

// Get one expense (GET)
router.get("/:id", getExpense)

// Create expense (POST)
router.post("/", createExpense)

// Delete expense (DELETE)
router.delete("/:id", deleteExpense)

// Delete expense (PATCH)
router.patch("/:id", updateExpense)

module.exports = router