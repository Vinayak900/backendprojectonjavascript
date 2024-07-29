const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).reject((err)=>
            next(err)
        )
    }
}

export{asyncHandler}


    //Higher Order Funtion which takes function as parameter and returns funtion also

// const asyncHandler = ()=>{}

// const asyncHandler = (func)=>{()=>{}}

// const asyncHandler = (func)=>async()=>{}

// const asyncHandler = (fn)=> async(req,res,next)=>{
//     try{
//         await fn(req,res,next)

//     }catch(err){
//         res.status(err.code).json({
//             success:false,
//             message:err.message

//         })
//     }

// }