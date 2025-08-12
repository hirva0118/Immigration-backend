import { Journey } from "../models/journey.models.js";
import { AppError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const addJourney = async(req,res)=>{
    try {
        const {image,date,title,description}= req.body;
        if(!image || !date || !title || !description){
            throw new AppError("All fields are required",400)
        }

        const newJourney = new Journey({image,date,title,description})
        await newJourney.save();

        return ApiResponse.success(res,newJourney,"Journey data added successfully")
    } catch (error) {
        return ApiResponse.error(res,error)
    }
}

export const getJourney = async(req,res) => {
    try {
        const allJourney = await Journey.find();
        if(!allJourney || allJourney.length===0){
            throw new AppError("No journey data found",400);
        }
        return ApiResponse.success(res,allJourney,"Journey data fetched successfully");
    } catch (error) {
        return ApiResponse.error(res,error)
    }
}