import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    userId: {
        type : String,
        required: true},
        desc: String,
        likes : [],
        image : String,

        
},
    {
        timestamp:true
    }
)

var postModel = mongoose.model("Post", postSchema)

export default postModel