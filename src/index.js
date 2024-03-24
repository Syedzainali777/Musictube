import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening of Port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB connection failed", error);
    throw err;
  });

// import { Express } from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error", error);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening of Port ${process.env.PORT}`);
//     });

//   } catch (error) {
//     console.log("Error", error);
//     throw err;
//   }
// })();
