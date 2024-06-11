const express = require("express")
const router = express.Router()

// Get all expenses (GET)
router.get("/", (req, res) => {
    res.json({message: "all expenses"})
})

// Get one expense (GET)
router.get("/:id", (req, res) => {
    const id = req.params.id
    res.json({message: `expense id: ${id}`})
})

// Create expense (POST)
router.post("/create", (req, res) => {
    res.json({message: "expense created"})
})

// Delete expense (DELETE)
router.delete("/:id", (req, res) => {
    const id = req.params.id
    res.json({message: "expense deleted"})
})

// Delete expense (PATCH)
router.patch("/:id", (req, res) => {
    const id = req.params.id
    res.json({message: "expense updated"})
})

module.exports = router