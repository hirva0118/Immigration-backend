import { Review } from "../models/review.models.js";
import { AppError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const addReview = async(req,res) => {
    try {
        const {review,avatar,name,position} = req.body;
        if(!review || !avatar || !name || !position){
            throw new AppError("All fields are required",400)
        }
        const newReview = new Review({review,avatar,name,position});
        await newReview.save();

        return ApiResponse.success(res,newReview,"Review added successfully")
    } catch (error) {
        return ApiResponse.error(res,error)
    }
}

export const getReview = async(req, res)=>{
    try {
        const allReview = await Review.find();
            if(!allReview || allReview.length===0){
                throw new AppError("No Review found",400)
            }
            return ApiResponse.success(res,allReview,"Review Fetched successfully")
    } catch (error) {
        return ApiResponse.error(res,error)
    }
}