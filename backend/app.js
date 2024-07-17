const express = require("express")
const app = express()
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.use(express.static("public"))

const port = 3000

app.listen(port, async () => {
    console.log(`O servidor Iniciou na porta${port}`)
})