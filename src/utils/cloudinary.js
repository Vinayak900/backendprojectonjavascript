import {v2 as cloudinary} from 'cloudinary';
import fs  from "fs";//it helps to read file and write 


 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

 const uploadOnCloudinary = async (localFilePath)=>{
try{
if(!localFilePath){
    return null
}
//upload the file on cloudinary
const response= await cloudinary.uploader.upload(localFilePath,{
    resource_type:'auto'
})
//file has been uploaded successfully
console.log('File is uploaded on cloudinary',response.url)
console.log(response.url)
return response

}catch(err){
  fs.unlinkSync(localFilePath) //remove the locally saved temporary file 
}
}

export{uploadOnCloudinary}