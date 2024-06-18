const express = require("express")
const mongoose = require("mongoose")
const expensesRoutes = require("./routes/expensesRoutes")
const budgetRoutes = require("./routes/budgetRoutes")
require("dotenv").config()

// Express App
const app = express()

// Middleware
app.use(express.json())

// Routes
app.use("/api/expenses", expensesRoutes)
app.use("/api/budgets", budgetRoutes)

// Connect to mongo db
const dbURI = process.env.Mong_URI
mongoose.connect(dbURI).then((res) => {
  console.log("mongoDB connected")
  app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
  })
})
