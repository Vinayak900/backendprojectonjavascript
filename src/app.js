import express from 'express'
import cookieParser from 'cookie-parser'
import cros from 'cros'

const app = express()

app.use(cros({
    origin:process.env.CROS_ORIGIN, //It will decide which types of requests will accept
    Credentials:true
}))
app.use(express.json({limit:"20kb"})) //how many kb json sould we need to send set the limit 

app.use(express.urlencoded({extended:true,
    limit:"20kb"
}))  //which helps to convert special character and convert url to encoded format

app.use(express.static("public")) //which is static folder we are spcifing like images,pdfs we want to store 

app.use(express.cookieParser())

export {
    app
}