import express from "express"
import { addSucessStory, getSuccessStory } from "../controllers/successStory.controller.js";

const router = express.Router();

router.post("/add-success-story",addSucessStory)
router.get("/get-success-story",getSuccessStory);

export default router;