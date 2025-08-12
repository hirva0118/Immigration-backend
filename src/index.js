import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import tapestryRoute from "./routes/tapestry.route.js";
import reviewRoute from "./routes/review.route.js";
import journeyRoute from "./routes//journey.route.js"
import successStory from "./routes/successStory.js";
import inquiryRoute from "./routes/inquiry.route.js"

import logger from "./utils/logger.js";
import { connect } from './lib/mongooseConnect.js';

dotenv.config();

const app = express();
// ##SWAGGER##

app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: "Too many requests",
});
app.use(limiter);

const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

connect();
app.use("/api/home", tapestryRoute);
app.use("/api/home",reviewRoute);
app.use("/api/home",journeyRoute);
app.use("/api/about",inquiryRoute)
app.use("/api/service", successStory);

app.get("/", (_req, res) => {
  res.send("API is running");
});

// ##ROUTES##

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  logger.info(`🚀 Server running at http://localhost:${PORT}`)
);
