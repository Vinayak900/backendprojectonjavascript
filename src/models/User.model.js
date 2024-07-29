import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true  
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true  
    },
    avatar:{
        type:String,//Cloudinary url using(3rd part)
        required:true,
     
    },
    coverImage:{
        type:String,//Cloudinary url using(3rd part)
     
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,//Cloudinary url using(3rd part)
        ref:'Video'
     
    }],
    password:{
        type:String,
        required:[true,'Password Is Required']
    },
    refreshToken:{
        type:String
    },

} ,
 {
    timestamps:true
})
userSchema.pre("save", async function(next){
if(!this.isMoified("password")) return next();
    this.password=bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.isPasswordCorrect = async function(password){
  return await  bcrypt.compare(password,this.password);
}
userSchema.methods.generateAccessToken =  async function(){
    jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken =  async function(){
    jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
    
}
export const User = mongoose.model("User",userSchema)