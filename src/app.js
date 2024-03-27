import express from "express"; // Use default import syntax
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js"; // Import your user router

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16KB" }));
app.use(express.urlencoded({ extended: true, limit: "16KB" })); // Corrected the typo here
app.use(express.static("Public"));
app.use(cookieParser());

// Register your userRouter
app.use("/api/v1/users", userRouter);

export default app;
