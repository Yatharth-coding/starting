import express, { urlencoded } from "express"
import cors from "cors"
import cookiesParser from "cookie-parser"

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN ,
    Credential:true
}))
app.use(express.json({limit:"16kb"}))
app.use(urlencoded({extended:true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookiesParser)

export { app }