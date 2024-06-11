function getExpenses(req, res) {
    res.json({message: "all expenses"})
}

function getExpense(req, res) {
    const id = req.params.id
    res.json({message: `expense id: ${id}`})
}

function createExpense(req, res) {
    res.json({message: "expense created"})
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