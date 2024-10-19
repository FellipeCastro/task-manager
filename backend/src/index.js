import express from "express"
import router from "./routes.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(router)
app.use(cors())

const PORT = 5000
app.listen(PORT, () => {
    console.log("Servidor rodando em: http://localhost:" + PORT)
})
