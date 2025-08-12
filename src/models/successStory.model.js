import mongoose from "mongoose";

const successStorySchema = mongoose.Schema({
    success:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    }
})

export const SuccessStory = mongoose.model("SuccessStory", successStorySchema);