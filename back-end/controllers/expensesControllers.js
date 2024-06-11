const Expense = require("../models/expenseModel")

function getExpenses(req, res) {
    res.json({message: "all expenses"})
}

function getExpense(req, res) {
    const id = req.params.id
    res.json({message: `expense id: ${id}`})
}

async function createExpense(req, res) {
    console.log(req.body)
    const { transactionType, price, notes } = new Expense(req.body)
    try {
        const expense = await Expense.create({ transactionType, price, notes })
        res.status(200).json(expense)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

function deleteExpense(req, res) {
    const id = req.params.id
    res.json({message: "expense deleted"})
}

function updateExpense(req, res) {
    const id = req.params.id
    res.json({message: "expense updated"})
}

module.exports = {
    getExpenses,
    getExpense,
    createExpense, 
    deleteExpense, 
    updateExpense
}