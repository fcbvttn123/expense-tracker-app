const mongoose = require("mongoose")
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    transactionType: {
        type: String, 
        required: true
    }, 
    price: {
        type: Number, 
        required: true
    }, 
    notes: {
        type: String, 
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model("Expense", expenseSchema)