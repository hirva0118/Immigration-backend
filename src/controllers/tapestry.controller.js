import { Tapestry } from "../models/tapestry.models.js";
import { AppError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const addTapestry = async(req,res) => {
    try {
        const {image,title,description} = req.body;
        if(!image || !title || !description){
            throw new AppError("All fields are required",400)
        }

        const newTapestry = new Tapestry({image,title,description});
        await newTapestry.save();

        return ApiResponse.success(res,newTapestry,"Tapestry added successfully");
    } catch (error) {
        return ApiResponse.error(res,error)
    }
}

export const getTapestry = async(req, res) =>{
    try {
        const allTapestry = await Tapestry.find();
        if(!allTapestry || allTapestry.length===0)
        {
            throw new AppError("No Tapestry data found",400)
        }
        return ApiResponse.success(res,allTapestry,"Tapestry list fetched succcesfully")
    } catch (error) {
        return ApiResponse.error(res,error)
    }
}