//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import {DATA_BASE} from "./constant"
import connectDB from "./db/DbConn.js";
import { app } from './app.js';

dotenv.config({path:'./.env'})



connectDB().then(()=>{
    app.listen(process.env.PORT||8080,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })

}).catch((err)=>{
    console.log(`Database Connection Failed `,err)
})














// import express from "express"
// const app = express()

// (async()=>{
//     try{
//  await mongoose.connect(`${process.env.MONGO-URI}/${DATA_BASE}`)
//  app.on("error",(error)=>{
//     console.error('Error :',error)
//     throw error
    
//  })
//     }catch{
//         console.error('Error :',error)
//         throw error
//     }

// })()