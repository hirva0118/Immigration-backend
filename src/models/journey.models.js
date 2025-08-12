import mongoose from "mongoose";

const journeySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Journey = mongoose.model("Journey", journeySchema);
