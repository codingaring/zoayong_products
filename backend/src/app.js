import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.error("Connection error", error));

const app = express();
app.use(express.json());

// 모든 상품 조회
/**
 * - sort 가격을 기준으로 오름차순 내림차순
 * - count 한 번에 몇 개 가져올 것인지
 */
app.get("/products", async (req, res) => {
  const sort = req.query.sort;
  const count = Number(req.query.count);

  const sortOption = { price: sort };
  const products = await Product.find()
    .sort(sortOption)
    .limit(count)
    .select("id name price category thumbnailImage");

  res.send(products);
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Cannot find given id" });
  }
});

app.listen(3000, () => console.log("Server Started"));
