import express from "express"
import { addJourney, getJourney } from "../controllers/journey.controller.js";

const router = express.Router();

router.post("/add-journey",addJourney);
router.get("/get-journey",getJourney)

export default router;