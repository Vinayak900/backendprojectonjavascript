import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema =new Schema({
    videoFile:{
        type:String , //(3rd party url)
        required:true

    },
    thumbnail:{
        type:String , //(3rd party url)
        required:true
    },
    title:{
        type:String , 
        required:true
    },
    descriotion:{
        type:String , 
        required:true
    },
    duration:{
        type:Number , 
        required:true
    },
    viewes:{
        type:Number , 
        default:0
    },
    isPublished:{
        type:Boolean , 
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId , 
        ref:'User'
    }

},{
    timestamps:true
}
)
videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model('Video',videoSchema)