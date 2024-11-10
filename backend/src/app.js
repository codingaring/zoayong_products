import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.error("Connection error", error));

const app = express();
app.use(express.json());

app.listen(3000, () => console.log("Server Started"));
