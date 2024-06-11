const express = require("express")
const expensesRoutes = require("./routes/expensesRoutes")
const mongoose = require("mongoose")
require("dotenv").config()

// Express App
const app = express()

// Middleware 
app.use(express.json())

// Routes 
app.use("/api/expenses", expensesRoutes)

// Connect to mongo db 
const dbURI = process.env.Mong_URI
mongoose.connect(dbURI).then(res => {
    console.log("mongoDB connected")
    app.listen(process.env.PORT, () => {
        console.log(`Listening to port ${process.env.PORT}`)
    })
})