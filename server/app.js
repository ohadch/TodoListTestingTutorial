const express = require("express");
const cors = require('cors')

const { PORT } = require("./settings");

const app = express();


app.use(cors())
app.use(express.json())

app.use(function(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`)
    next()
})

app.use("/api", require("./api"))

app.listen(PORT, function () {
    console.log(`🚀 Server is listening on http://localhost:${PORT}...`)
})