import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {User} from "../models/User.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"
const registerUser = asyncHandler( async(req,res)=>{
//get user details
//validation - not empty
//check duplication of user
//check for avatar and images
//upload them on cloudinary, and check preperly uploaded or not
//create user object -create entry into DB
//remove refreshtoken and password from response
//check for user creation
//return response if user created

//get user details
const {username,password,email}=req.body

//validation - not empty
if([fullname,username,password,email].some((fields)=> fields?.trim()==="")){
    throw new ApiError(400,"All feilds are required")
}

//check duplication of user
const isuserExist=User.findOne({
    $or:[{username},{email}]   //filter based on multiple fieldss
})
if (isuserExist){
    throw new ApiError(409,"User Already Exist")
}

//check for avatar and images
const avtarLocalPath=req.files?.avatar[0]?.path 
const coverLocalPath=req.files?.coverImage[0]?.path            //(? meaning is optional)
if (!avtarLocalPath){
    throw new ApiError(400,"Avatar file is required")
}

//upload them on cloudinary, and check preperly uploaded or not
 const avatar = await uploadOnCloudinary(avtarLocalPath)
 const coverImage = await uploadOnCloudinary(coverLocalPath)
 if(!avatar){
    throw new ApiError(400,"Avatar file is required")
 }
//create user object -create entry into DB
 const user= await User.create({
    fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email,
    password,
    username:username.toLowerCase()
})

//remove refreshtoken and password from response
 const createrUserId= await User.findById(user._id).select(
    "-password -refreshToken"   //select will select all the feilds from DB -ve feild name eliminates the particular feild
 )

//check for user creation
 if(!createrUserId){
    throw new ApiError(500,"Something Went Wrong During Creation Of User")
 }

 //return response if user created
 return res.status(201).json(
    new ApiResponse(200,createrUserId,"User Registered Successfully")
 )
})

export {registerUser}