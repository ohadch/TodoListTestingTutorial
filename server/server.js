const { PORT } = require("settings");
const app = require("./app")

app.listen(PORT, function () {
    console.log(`🚀 Server is listening on http://localhost:${PORT}...`)
})