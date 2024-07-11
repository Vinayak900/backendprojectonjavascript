import mongoose from "mongoose";
import {DATA_BASE} from "../constant.js"

const connectDB = async ()=>{
    try{
      const connectionInstance =  await mongoose.connect(`${process.env.MONGOURI}/${DATA_BASE}`)
      console.log(`\n MongoDB Connected ,${connectionInstance.connection.host}`)
 
    }catch(error){
        console.log('Mongo Connection Error :',error)
        process.exit(1) 
    }
}

export default connectDB