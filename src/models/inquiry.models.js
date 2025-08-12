import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Inquiry = mongoose.model("Inquiry", inquirySchema);