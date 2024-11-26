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

function asyncHandler(handler) {
  return async function (req, res) {
    try {
      await handler(req, res);
    } catch (e) {
      if (e.name === "ValidationError") {
        res.status(400).send({ message: e.message });
      } else if (e.name === "CastError") {
        res.status(404).send({ message: "Cannot find given id." });
      } else {
        res.status(500).send({ message: e.message });
      }
    }
  };
}

// 모든 상품 조회
/**
 * - sort 가격을 기준으로 오름차순 내림차순
 * - count 한 번에 몇 개 가져올 것인지
 */
app.get(
  "/products",
  asyncHandler(async (req, res) => {
    const sort = req.query.sort;
    const count = Number(req.query.count);

    const sortOption = { price: sort };
    const products = await Product.find()
      .sort(sortOption)
      .limit(count)
      .select("id name price category thumbnailImage");

    res.send(products);
  })
);

// 특정 상품 조회
app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Cannot find given id" });
  }
});

// 관리자 상품 추가하기
app.post(
  "/products",
  asyncHandler(async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.status(201).send(newProduct);
  })
);

app.listen(3000, () => console.log("Server Started"));
