import express from "express"
import { addReview, getReview } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/add-review",addReview);
router.get("/get-review",getReview)

export default router;