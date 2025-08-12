import { Inquiry } from "../models/inquiry.models.js";
import { AppError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const addInquiry = async(req,res)=>{
    try {
        const {email,phone,address,message}= req.body;
        if(!email || !phone || !address || !message){
            throw new AppError("All fields are required",400)
        }

        const existing = await Inquiry.findOne({email})
        if(existing){
            throw new AppError("email already exists",409)
        }
        
        const newInquiry = new Inquiry({email,phone,address,message})
        await newInquiry.save();

        return ApiResponse.success(res,newInquiry,"Inquiry added succesfully")

    } catch (error) {
        console.log(error)        
    }
}
export const getInquiries = async(req,res)=>{
    try {
        const allInquiries = await Inquiry.find();
        if(!allInquiries || allInquiries.length===0){
            throw new AppError("No inquiries found",400)
        }
        return ApiResponse.success(res,allInquiries,"Inquiries fetched successfully");

    } catch (error) {
        return ApiResponse.error(res,error)
    }
}