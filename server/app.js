const express = require("express");
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

app.use(function(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`)
    next()
})

app.use("/api", require("./api"))

module.exports = app;