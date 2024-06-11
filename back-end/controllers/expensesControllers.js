const Expense = require("../models/expenseModel")

async function getExpenses(req, res) {
    try {
        const result = await Expense.find().sort({createdAt: -1})
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
    }
}

async function getExpense(req, res) {
    const id = req.params.id
    try {
        const result = await Expense.findById(id)
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
    }
}

async function createExpense(req, res) {
    const { transactionType, price, notes } = new Expense(req.body)
    try {
        const expense = await Expense.create({ transactionType, price, notes })
        res.status(200).json(expense)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

async function deleteExpense(req, res) {
    const id = req.params.id
    try {
        const result = await Expense.findOneAndDelete({_id: id})
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
    }
}

async function updateExpense(req, res) {
    const id = req.params.id
    try {
        const result = await Expense.findOneAndUpdate({_id: id}, {
            ...req.body
        })
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getExpenses,
    getExpense,
    createExpense, 
    deleteExpense, 
    updateExpense
}