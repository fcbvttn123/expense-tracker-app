const express = require("express")
const expensesRoutes = require("./routes/expensesRoutes")
require("dotenv").config()

// Express App
const app = express()

// Routes 
app.use("/api/expenses", expensesRoutes)

// App starts listening 
app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})