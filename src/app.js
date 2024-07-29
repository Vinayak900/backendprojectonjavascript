// import express from 'express'
// import cookieParser from 'cookie-parser'
// import cros from 'cros';

// const app = express()

// app.use(cros({
//     origin:process.env.CROS_ORIGIN, //It will decide which types of requests will accept
//     Credentials:true
// }))
// app.use(express.json({limit:"20kb"})) //how many kb json sould we need to send set the limit 

// app.use(express.urlencoded({extended:true,
//     limit:"20kb"
// }))  //which helps to convert special character and convert url to encoded format

// app.use(express.static("public")) //which is static folder we are spcifing like images,pdfs we want to store 

// app.use(express.cookieParser())

// //Routes import

// import userRouter from "./routes/user.router.js"
 
// //routes declartion
// app.use("/api/v1/users",userRouter)

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)

export {
    app
}