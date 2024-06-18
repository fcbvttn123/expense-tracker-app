const mongoose = require("mongoose")
const Schema = mongoose.Schema

const subBudgetSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const budgetSchema = new Schema(
  {
    categories: [subBudgetSchema],
    period: {
      type: "String",
      required: true,
    },
    startDate: {
      type: Date,
      required: false,
    },
    endDate: {
      type: Date,
      required: false,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Budget", budgetSchema)
