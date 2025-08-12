import express from "express"
import { addInquiry, getInquiries } from "../controllers/inquiry.controller.js";

const router = express.Router();

router.post("/add-inquiry",addInquiry);
router.get("/get-inquiry",getInquiries);
export default router;