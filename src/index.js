//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import {DATA_BASE} from "./constant"
import connectDB from "./db/DbConn.js";

dotenv.config({path:'./.env'})



connectDB()














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