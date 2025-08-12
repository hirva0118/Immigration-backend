import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    review:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true,
    }
})
export const Review = mongoose.model("Review",reviewSchema)