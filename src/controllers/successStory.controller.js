import { SuccessStory } from "../models/successStory.model.js";
import { AppError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const addSucessStory = async(req,res)=>{
    try {
        const {success,avatar,name,position} = req.body;
        if(!success || !avatar || !name ||!position){
            throw new AppError("All fields are required",400);
        }
        const newSuccessStory = new SuccessStory({success,avatar,name,position});
        await newSuccessStory.save();

        return ApiResponse.success(res,newSuccessStory,"Success story added successfully")
    } catch (error) {
        return ApiResponse.error(res,error)
    }
}
export const getSuccessStory = async(req,res)=>{
    try {
        const allSuccessStory = await SuccessStory.find();
        if(!allSuccessStory || allSuccessStory.length===0)
        {
            throw new AppError("No success stroy found",400)
        }
        return ApiResponse.success(res,allSuccessStory,"Success story fetched successfully")
    } catch (error) {
        return ApiResponse.error(res,error)
    }
}