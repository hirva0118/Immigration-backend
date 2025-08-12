import express from "express"
import { addTapestry, getTapestry } from "../controllers/tapestry.controller.js";

const router = express.Router();

router.post("/add-tapestry",addTapestry);
router.get("/get-tapestry",getTapestry);

export default router;