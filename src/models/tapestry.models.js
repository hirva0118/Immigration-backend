import mongoose from "mongoose"
const tapestrySchema = new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

export const Tapestry = mongoose.model("Tapestry",tapestrySchema)